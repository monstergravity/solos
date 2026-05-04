import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, Search, Plus, Menu, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut, User, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => signOut(auth);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex-1 lg:flex hidden items-center gap-6">
        </div>

        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:rotate-12 transition-transform">🦄</span>
          <span className="font-mono font-bold text-xl tracking-tighter">solos</span>
        </Link>

        <div className="flex-1 flex justify-end items-center gap-4">
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowMenu(!showMenu)}
                className="w-8 h-8 rounded-full border border-gray-200 overflow-hidden hover:ring-2 ring-gray-100 transition-all flex items-center justify-center bg-gray-50"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User" />
                ) : (
                  <span className="text-[10px] font-bold">{user.email?.charAt(0).toUpperCase()}</span>
                )}
              </button>
              
              <AnimatePresence>
                {showMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl p-2 z-50 font-mono"
                  >
                    <div className="px-3 py-2 border-b border-gray-50 mb-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase truncate">{user.email}</p>
                    </div>
                    <Link 
                      to="/verify"
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setShowMenu(false)}
                    >
                      <Plus className="w-4 h-4" /> Add Startup
                    </Link>
                    <button 
                      onClick={() => { handleLogout(); setShowMenu(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
                className="text-xs font-bold font-mono text-gray-500 hover:text-black transition-colors"
              >
                Login
              </button>
              <Link to="/verify" className="items-center gap-2 px-4 py-1.5 bg-black text-white rounded-full text-xs font-bold font-mono hover:bg-gray-800 transition-colors flex">
                <Plus className="w-3 h-3" /> List Now
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
