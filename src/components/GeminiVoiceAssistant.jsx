import React from 'react';
import { Volume2, Sparkles, CheckCircle2, ArrowRight, User, Bot, RotateCcw } from 'lucide-react';

export default function GeminiVoiceAssistant({
  userInput,
  aiResponse,
  isProcessing,
  matchedScheme,
  onSpeak,
  onStartWizard,
  onReset
}) {
  if (!userInput && !aiResponse && !isProcessing) return null;

  return (
    <div className="max-w-4xl mx-auto my-6 px-4 no-print">
      <div className="bg-gradient-to-br from-white via-rose-50/50 to-amber-50/50 rounded-3xl border-2 border-rose-300 p-5 sm:p-6 shadow-xl relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-rose-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold shadow">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-rose-950 text-base">सहेली AI आवाज जवाब (Voice Answer)</h3>
              <p className="text-xs text-rose-700">Google Gemini AI द्वारा सरलीकृत उत्तर</p>
            </div>
          </div>

          <button
            onClick={onReset}
            className="text-xs text-gray-500 hover:text-rose-700 font-bold flex items-center space-x-1 px-2.5 py-1 rounded-lg border border-gray-200 hover:border-rose-300 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>नया सवाल (Clear)</span>
          </button>
        </div>

        {/* User Spoken Query */}
        {userInput && (
          <div className="my-4 flex items-start space-x-3 bg-white/80 p-3.5 rounded-2xl border border-rose-100 shadow-sm">
            <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase">आपने पूछा (You Spoke):</span>
              <p className="text-sm font-semibold text-gray-800 italic">"{userInput}"</p>
            </div>
          </div>
        )}

        {/* Loading indicator */}
        {isProcessing && (
          <div className="py-6 flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 border-4 border-rose-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-bold text-rose-800 animate-pulse">
              सहेली AI आपके लिए सबसे अच्छी योजना ढूंढ रही है...
            </p>
          </div>
        )}

        {/* Gemini Response */}
        {aiResponse && !isProcessing && (
          <div className="space-y-4 my-2">
            <div className="bg-rose-900 text-rose-50 p-4 rounded-2xl shadow-md space-y-3 relative">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center">
                  <Sparkles className="w-4 h-4 mr-1 text-amber-300" />
                  उत्तर (Audio Answer)
                </span>
                <button
                  onClick={() => onSpeak(aiResponse)}
                  className="bg-amber-400 hover:bg-amber-300 text-rose-950 font-bold text-xs px-3 py-1.5 rounded-full flex items-center space-x-1 shadow transition transform active:scale-95"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>फिर से सुनें (Listen Again)</span>
                </button>
              </div>

              <p className="text-base sm:text-lg font-medium leading-relaxed">
                {aiResponse}
              </p>
            </div>

            {/* Matched Scheme Recommendation Box */}
            {matchedScheme && (
              <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-500">
                <div className="flex items-center space-x-3">
                  <img
                    src={matchedScheme.image}
                    alt={matchedScheme.title['hi-IN']}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-amber-300 shrink-0 shadow"
                  />
                  <div>
                    <span className="bg-amber-400 text-emerald-950 font-extrabold text-xs px-2 py-0.5 rounded-md uppercase">
                      सुझाई गई योजना ({matchedScheme.amount})
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-amber-100 mt-1">
                      {matchedScheme.title['hi-IN']}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => onStartWizard(matchedScheme)}
                  className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-sm px-5 py-3 rounded-xl shadow-lg transition transform active:scale-95 flex items-center justify-center space-x-2 shrink-0"
                >
                  <span>पात्रता जाँचें व आवेदन कार्ड बनाएँ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
