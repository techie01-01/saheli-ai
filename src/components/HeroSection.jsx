import React from 'react';
import { Mic, MicOff, Volume2, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { AUDIO_PRACTICE_PHRASES } from '../data/schemes';

export default function HeroSection({
  isListening,
  isSpeaking,
  onStartMic,
  onStopMic,
  onPhraseClick,
  onPlayWelcome,
  currentLang
}) {
  return (
    <div className="relative bg-gradient-to-b from-amber-50 via-rose-50 to-orange-50 border-b border-rose-100 py-8 px-4 sm:px-6 lg:px-8 no-print">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-r from-rose-300/20 via-pink-300/30 to-amber-300/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left column: High contrast text & Audio intro */}
        <div className="md:col-span-7 text-center md:text-left space-y-4">
          
          <div className="inline-flex items-center space-x-2 bg-rose-100 border border-rose-300 text-rose-800 rounded-full px-3.5 py-1 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-spin" />
            <span>गूगल जेमिनी AI द्वारा संचालित (Powered by Gemini AI)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-rose-950 leading-tight tracking-tight">
            बोलिए और जानिए अपनी <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-pink-600 to-amber-600">
              सरकारी योजनाएं
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-medium max-w-xl">
            बिना किसी लिखाई या अंग्रेजी के! बस नीचे दिए <span className="font-bold text-rose-700">माइक (Mic)</span> को दबाएं और अपनी भाषा में पूछें।
          </p>

          {/* Welcome Audio Narration Button */}
          <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button
              onClick={onPlayWelcome}
              className="flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition transform active:scale-95"
            >
              <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-bounce text-amber-300' : ''}`} />
              <span>आवाज में गाइड सुनें (Listen Welcome)</span>
            </button>
          </div>

        </div>

        {/* Right column: Massive Voice Mic Trigger & Visual Card */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          
          <div className="relative w-full max-w-xs bg-white rounded-3xl p-6 shadow-xl border-2 border-rose-200 text-center flex flex-col items-center">
            
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400 mb-3 shadow">
              <img src="/images/avatar.png" alt="Aasha Assistant" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-lg font-extrabold text-rose-900 mb-1">सहेली AI आवाज सहायक</h3>
            <p className="text-xs text-gray-500 mb-5">माइक्रोफोन को छूकर बोलना शुरू करें</p>

            {/* Giant Pulsating Mic Button */}
            <button
              onClick={isListening ? onStopMic : onStartMic}
              className={`relative w-28 h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl ${
                isListening 
                  ? 'bg-rose-600 text-white ring-8 ring-rose-300 animate-pulse-mic' 
                  : 'bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-500 text-white hover:scale-105 active:scale-95 hover:shadow-rose-400/50'
              }`}
              aria-label={isListening ? "Stop Listening" : "Start Listening"}
            >
              {isListening ? (
                <>
                  <MicOff className="w-12 h-12 mb-1 animate-bounce" />
                  <span className="text-xs font-bold tracking-wider uppercase">सुन रही हूँ...</span>
                </>
              ) : (
                <>
                  <Mic className="w-12 h-12 mb-1" />
                  <span className="text-xs font-bold tracking-wider uppercase">बोलें (Speak)</span>
                </>
              )}
            </button>

            {/* Visual Waveform Indicator */}
            {isListening && (
              <div className="flex items-center justify-center space-x-1.5 mt-4">
                <span className="w-1.5 h-6 bg-rose-500 rounded-full animate-wave-1" />
                <span className="w-1.5 h-9 bg-rose-600 rounded-full animate-wave-2" />
                <span className="w-1.5 h-7 bg-amber-500 rounded-full animate-wave-3" />
                <span className="w-1.5 h-10 bg-pink-600 rounded-full animate-wave-1" />
                <span className="w-1.5 h-5 bg-rose-500 rounded-full animate-wave-2" />
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Recommended Voice Phrase Chips */}
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-rose-200/60">
        <p className="text-xs font-bold text-rose-900 uppercase tracking-wider text-center md:text-left mb-3 flex items-center justify-center md:justify-start">
          <HelpCircle className="w-4 h-4 mr-1.5 text-rose-600" />
          <span>या इनमें से किसी एक पर टैप करके पूछें (Click any sample query):</span>
        </p>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {AUDIO_PRACTICE_PHRASES.map((phrase, idx) => (
            <button
              key={idx}
              onClick={() => onPhraseClick(phrase)}
              className="bg-white hover:bg-rose-100 text-rose-900 border border-rose-200 font-semibold text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-sm transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-1.5"
            >
              <Volume2 className="w-3.5 h-3.5 text-rose-500" />
              <span>"{phrase}"</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
