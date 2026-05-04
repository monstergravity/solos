import React, { useState } from 'react';
import { Shield, Lock, CheckCircle, AlertCircle, ArrowRight, Wallet, ExternalLink, LogIn } from 'lucide-react';
import axios from 'axios';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { db, auth, googleProvider } from '../lib/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Verify() {
  const [method, setMethod] = useState<'stripe' | 'revenuecat'>('stripe');
  const [apiKey, setApiKey] = useState('');
  const [startupName, setStartupName] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<{ mrr: number; count: number; currency: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    setError(null);
    setResult(null);
    setIsSaved(false);

    try {
      const response = await axios.post(`/api/verify/${method}`, { apiKey });
      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || "Verification failed. Please check your API key.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSave = async () => {
    if (!result || !startupName || !user) return;
    
    setIsVerifying(true);
    const startupId = startupName.toLowerCase().replace(/\s+/g, '-');
    const path = `startups/${startupId}`;

    try {
      // 1. Create/Update Startup
      await setDoc(doc(db, 'startups', startupId), {
        name: startupName,
        mrr: result.mrr,
        verifiedAt: new Date().toISOString(),
        founderId: user.uid,
        updatedAt: serverTimestamp()
      }, { merge: true });

      // 2. Add Revenue Proof
      await setDoc(doc(db, 'startups', startupId, 'proofs', `${Date.now()}`), {
        mrr: result.mrr,
        count: result.count,
        currency: result.currency,
        provider: method,
        timestamp: serverTimestamp()
      });

      setIsSaved(true);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, path);
    } finally {
      setIsVerifying(false);
    }
  };

  if (!user) {
    return (
      <div className="max-w-xl mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-3xl mb-8 ring-4 ring-blue-50/50">
          <Lock className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-mono font-bold tracking-tight mb-4">Login required</h1>
        <p className="text-gray-500 mb-10 text-lg leading-relaxed">
          To maintain a verified leaderboard, you must be logged in with Google to list your startup and verify its revenue.
        </p>
        <button 
          onClick={handleGoogleLogin}
          className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-2xl font-bold font-mono hover:bg-gray-800 transition-all flex items-center justify-center gap-3 text-lg"
        >
          <LogIn className="w-5 h-5" />
          <span>Login with Google</span>
        </button>
        <p className="mt-8 text-xs text-gray-400 font-medium">
          We use Google to verify your identity and protect the integrity of the board.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6 ring-1 ring-blue-100">
           <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-mono font-bold tracking-tight mb-4">Verify your revenue</h1>
        <p className="text-gray-500 text-lg">
          Connect your Stripe or RevenueCat to display a verified MRR badge on your startup.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <div className="space-y-6 mb-10">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Startup Name</label>
            <input 
              type="text" 
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
              placeholder="e.g. My Amazing SaaS"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono"
            />
          </div>
        </div>

        {/* Method Toggles */}
        <div className="flex gap-4 mb-8">
           <button 
             onClick={() => setMethod('stripe')}
             className={cn(
               "flex-1 py-4 px-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-2",
               method === 'stripe' ? "border-blue-500 bg-blue-50/30" : "border-gray-50 hover:border-gray-200"
             )}
           >
             <span className="text-sm font-bold font-mono">Stripe</span>
             <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Connect via API Key</span>
           </button>
           <button 
             onClick={() => setMethod('revenuecat')}
             className={cn(
               "flex-1 py-4 px-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-2",
               method === 'revenuecat' ? "border-red-500 bg-red-50/30" : "border-gray-50 hover:border-gray-200"
             )}
           >
             <span className="text-sm font-bold font-mono">RevenueCat</span>
             <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Connect via Read-only Key</span>
           </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              {method === 'stripe' ? 'Stripe Restricted API Key' : 'RevenueCat Public/Secret Key'}
            </label>
            <div className="relative">
               <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
               <input 
                 type="password" 
                 value={apiKey}
                 onChange={(e) => setApiKey(e.target.value)}
                 placeholder={method === 'stripe' ? "rk_live_..." : "rc_..."}
                 className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono"
               />
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-2xl p-4 flex gap-4 text-sm text-blue-800 leading-relaxed">
            <Shield className="w-5 h-5 shrink-0 mt-0.5" />
            <p>
              We recommend using a <b>Restricted Key</b> with only <code>Subscriptions: Read</code> permissions. 
              We never store your keys; they are only used for a one-time verification.
            </p>
          </div>

          <button 
            disabled={!apiKey || isVerifying || !startupName}
            onClick={handleVerify}
            className="w-full bg-black text-white py-4 rounded-xl font-bold font-mono flex items-center justify-center gap-2 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isVerifying ? (
              <span className="flex items-center gap-2 animate-pulse">Processing...</span>
            ) : (
              <>
                <span>Verify and Calculate MRR</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Results */}
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100 flex flex-col items-center gap-6 sm:flex-row"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">Verification successful</p>
              <h3 className="text-2xl font-mono font-bold text-gray-900">${result.mrr.toLocaleString()} MRR</h3>
              <p className="text-xs text-green-700">Calculated from {result.count} active subscriptions</p>
            </div>
            {isSaved ? (
              <span className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Saved
              </span>
            ) : !user ? (
              <button 
                onClick={handleGoogleLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" /> Login to Save
              </button>
            ) : (
              <button 
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors"
              >
                Save to solos
              </button>
            )}
          </motion.div>
        )}

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-4"
          >
            <AlertCircle className="w-6 h-6 text-red-600" />
            <p className="text-sm font-medium text-red-800">{error}</p>
          </motion.div>
        )}
      </div>

      {/* Guide */}
      <div className="mt-12">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest font-mono mb-6">How to get your key</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2">
               <span className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs">1</span>
               Stripe Restricted Key
             </h3>
             <p className="text-sm text-gray-500 leading-relaxed">
               Go to Developers &gt; API Keys in your Stripe dashboard. Click "Create restricted key" and enable:
             </p>
             <ul className="text-xs text-gray-500 space-y-2 list-disc pl-5 font-mono">
               <li>Subscriptions: Read</li>
               <li>Plans: Read</li>
               <li>Customers: Read</li>
             </ul>
           </div>
           <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2">
               <span className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs">2</span>
               RevenueCat Key
             </h3>
             <p className="text-sm text-gray-500 leading-relaxed">
               Access your Project Settings &gt; API Keys. Copy the "Public app-specific" or "Secret" key depending on your project type.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
