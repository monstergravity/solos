import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Stripe from "stripe";
import axios from "axios";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API Routes ---

  // Stripe Verification
  app.post("/api/verify/stripe", async (req, res) => {
    const { apiKey } = req.body;
    if (!apiKey) return res.status(400).json({ error: "Missing API Key" });

    try {
      const stripe = new Stripe(apiKey, { apiVersion: "2025-02-11" as any });
      
      // We sum active subscriptions to calculate MRR
      // List all active subscriptions
      const subscriptions = await stripe.subscriptions.list({
        status: "active",
        limit: 100, // For a solo dev, 100 is usually plenty for a quick check, but ideally we'd paginate
      });

      let totalMrrCents = 0;

      for (const sub of subscriptions.data) {
        for (const item of sub.items.data) {
          const price = item.price;
          const quantity = item.quantity || 1;
          const unitAmount = price.unit_amount || 0;

          if (price.recurring?.interval === "month") {
            totalMrrCents += unitAmount * quantity;
          } else if (price.recurring?.interval === "year") {
            totalMrrCents += (unitAmount * quantity) / 12;
          } else if (price.recurring?.interval === "week") {
             totalMrrCents += (unitAmount * quantity) * 4.33;
          }
        }
      }

      res.json({
        mrr: Math.round(totalMrrCents / 100),
        currency: subscriptions.data[0]?.currency || "usd",
        count: subscriptions.data.length
      });
    } catch (error: any) {
      console.error("Stripe Error:", error);
      res.status(500).json({ error: error.message || "Failed to fetch Stripe data" });
    }
  });

  // RevenueCat Verification (Mock/Simple Implementation)
  app.post("/api/verify/revenuecat", async (req, res) => {
    const { apiKey, projectId } = req.body;
    if (!apiKey) return res.status(400).json({ error: "Missing API Key" });

    try {
      // RevenueCat REST API usually requires the API Key in the headers
      // Note: RevenueCat's GET /v1/projects requires a secret key
      // This is a simplified example of how one might fetch basic stats
      const response = await axios.get(`https://api.revenuecat.com/v1/subscribers/test_user`, {
        headers: { Authorization: `Bearer ${apiKey}` }
      });
      
      // In a real scenario, we'd use their "Overview" or "ETL" exports for true MRR
      // or iterate through active entitlements.
      // For this demo, let's return a success state
      res.json({
        status: "Ready",
        message: "Key validated, but full MRR calculation requires ETL export access."
      });
    } catch (error: any) {
      res.status(500).json({ error: "RevenueCat API Error" });
    }
  });

  // --- Vite Middleware ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
