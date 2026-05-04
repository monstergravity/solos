import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import StartupDetail from './pages/StartupDetail';
import Verify from './pages/Verify';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/startup/:id" element={<StartupDetail />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </main>
        
        <footer className="border-t border-gray-100 py-12 px-4 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-mono font-bold text-sm tracking-tighter">solos</span>
            </div>
            <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
              <a href="#" className="hover:text-black">Privacy</a>
              <a href="#" className="hover:text-black">Terms</a>
              <a href="#" className="hover:text-black">Contact</a>
              <a href="#" className="hover:text-black">Twitter/X</a>
            </div>
            <p className="text-xs text-gray-400 font-mono">© 2024 solos. Built for solo founders.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
