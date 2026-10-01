import React from 'react';
import { Volume2, Languages, Key, ShieldCheck, HeartHandshake } from 'lucide-react';
import { LANGUAGES } from '../data/schemes';

export default function Navbar({ 
  currentLang, 
  onLangChange, 
  onOpenJudgeModal, 
  onOpenKeyModal, 
  apiKeySet,
  speakText 
}) {
  const currentLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  const handleLangSelect = (code) => {
    onLangChange(code);
    const selected = LANGUAGES.find(l => l.code === code);
    if (selected) {
      speakText(`भाषा बदलकर ${selected.name} कर दी गई है।`, code);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-pink-700 via-rose-700 to-amber-700 text-white shadow-md no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center p-1 border-2 border-amber-300 shadow-inner">
            <img 
              src="/images/avatar.png" 
              alt="Saheli AI Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-black tracking-wide text-amber-200 drop-shadow">
                सहेली AI <span className="text-xs font-normal bg-pink-900/60 text-pink-200 px-2 py-0.5 rounded-full border border-pink-400/30">Google Build with AI</span>
              </h1>
            </div>
            <p className="text-xs text-rose-100 font-medium">
              ग्रामीण महिलाओं के लिए बोलकर सरकारी योजना खोजें (Voice AI Assistant)
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Language Selector */}
          <div className="relative flex items-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1.5 transition">
            <Languages className="w-4 h-4 text-amber-300 mr-2 shrink-0" />
            <select
              value={currentLang}
              onChange={(e) => handleLangSelect(e.target.value)}
              className="bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer pr-2"
              aria-label="Select Language"
            >
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code} className="text-gray-900 font-medium">
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Gemini API Key Button */}
          <button
            onClick={onOpenKeyModal}
            className={`flex items-center space-x-1 text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
              apiKeySet 
                ? 'bg-emerald-600/80 border-emerald-400 text-white hover:bg-emerald-600' 
                : 'bg-white/10 border-amber-300/40 text-amber-100 hover:bg-white/20'
            }`}
            title="Configure Google Gemini API Key"
          >
            <Key className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{apiKeySet ? 'Gemini AI Active' : 'Gemini Key'}</span>
          </button>

          {/* Judge Overview / SDG Badge */}
          <button
            onClick={onOpenJudgeModal}
            className="flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-300 text-rose-950 font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow transition transform active:scale-95 border border-amber-200"
          >
            <ShieldCheck className="w-4 h-4 text-rose-900" />
            <span>Hack2Skill Overview</span>
          </button>

        </div>

      </div>
    </header>
  );
}
