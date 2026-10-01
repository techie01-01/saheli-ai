import React from 'react';
import { X, ShieldCheck, Sparkles, Target, Zap, Globe, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function JudgeOverviewModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto no-print">
      <div className="bg-white rounded-3xl max-w-3xl w-full border-4 border-amber-400 shadow-2xl overflow-hidden my-8 relative">
        
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-rose-900 via-purple-900 to-amber-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center space-x-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider mb-2">
            <Award className="w-4 h-4" />
            <span>PromptWars × HACKARENA (Build with AI - Hack2Skill)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-amber-200">
            सहेली AI (Saheli AI) — Judges Overview
          </h2>
          <p className="text-sm text-rose-200 mt-1">
            Empowering First-Time Rural Women Users through Gemini AI Voice Navigation
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-gray-800 text-sm">
          
          {/* Challenge & Problem Statement */}
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-4 space-y-2">
            <div className="flex items-center space-x-2 text-rose-900 font-extrabold text-base">
              <Target className="w-5 h-5 text-rose-600" />
              <span>Challenge: The Invisible Woman</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              In India, <strong>48% of rural women</strong> have never used the internet. Existing portals require English typing, digital literacy, and OTP navigation. <strong>Saheli AI</strong> eliminates all text barriers using zero-literacy visual cards and Gemini-powered regional voice conversation.
            </p>
          </div>

          {/* SDG Alignment Grid */}
          <div>
            <h4 className="font-extrabold text-rose-950 text-base mb-3 flex items-center">
              <Globe className="w-5 h-5 text-rose-600 mr-2" />
              UN Sustainable Development Goals (SDG) Alignment:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-pink-50 p-3.5 rounded-xl border border-pink-200">
                <span className="bg-pink-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md uppercase">SDG 5 (5.1, 5.b)</span>
                <h5 className="font-extrabold text-pink-950 text-sm mt-1">Gender Equality</h5>
                <p className="text-xs text-pink-800 mt-1">Enhance women's empowerment through voice AI accessibility.</p>
              </div>

              <div className="bg-purple-50 p-3.5 rounded-xl border border-purple-200">
                <span className="bg-purple-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md uppercase">SDG 4 (4.3, 4.4)</span>
                <h5 className="font-extrabold text-purple-950 text-sm mt-1">Quality Education</h5>
                <p className="text-xs text-purple-800 mt-1">Provide skill loan schemes & maternity knowledge in native language.</p>
              </div>

              <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200">
                <span className="bg-amber-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md uppercase">SDG 10 (10.2)</span>
                <h5 className="font-extrabold text-amber-950 text-sm mt-1">Reduced Inequalities</h5>
                <p className="text-xs text-amber-800 mt-1">Empower marginalized women to claim entitlements independently.</p>
              </div>
            </div>
          </div>

          {/* Technical Innovations */}
          <div>
            <h4 className="font-extrabold text-rose-950 text-base mb-3 flex items-center">
              <Zap className="w-5 h-5 text-amber-500 mr-2" />
              Core Innovations & Gemini AI Integration:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold">
              <li className="flex items-center space-x-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Gemini 1.5/2.0 Flash:</strong> Translates bureaucratic rules into short 2-sentence spoken stories.</span>
              </li>
              <li className="flex items-center space-x-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Multilingual Web Speech:</strong> Native TTS & Speech-to-Text in 6 regional languages.</span>
              </li>
              <li className="flex items-center space-x-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Offline / Zero Latency Fallback:</strong> Instant response generator for seamless live demo.</span>
              </li>
              <li className="flex items-center space-x-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Printable Scheme Access Pass:</strong> QR-coded slip for Anganwadi / Gram Panchayat presentation.</span>
              </li>
            </ul>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm px-8 py-3 rounded-full shadow-lg transition"
            >
              समझ गए (Back to App)
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
