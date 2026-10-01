import React from 'react';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenJudgeModal }) {
  return (
    <footer className="bg-rose-950 text-rose-200 py-10 px-4 border-t-4 border-amber-400 mt-12 no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-xl font-black text-amber-300">सहेली AI (Saheli AI)</span>
            <span className="bg-rose-800 text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-600">
              PromptWars x HACKARENA
            </span>
          </div>
          <p className="text-xs text-rose-300 max-w-md">
            First-time rural women scheme navigator powered by Google Gemini AI & Speech Synthesis. Designed for zero-literacy digital inclusion.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <button
            onClick={onOpenJudgeModal}
            className="bg-amber-400 hover:bg-amber-300 text-rose-950 font-bold px-4 py-2 rounded-full shadow transition"
          >
            Judge Deck & SDG Mapping
          </button>
          
          <a
            href="https://hack2skill.com"
            target="_blank"
            rel="noreferrer"
            className="text-rose-300 hover:text-white flex items-center"
          >
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-amber-300" />
            <span>Hack2Skill AI Platform</span>
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-rose-900/80 text-center text-[11px] text-rose-400 flex items-center justify-center space-x-1">
        <span>Built with</span>
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        <span>for Google for Developers Hackathon (Build with AI)</span>
      </div>
    </footer>
  );
}
