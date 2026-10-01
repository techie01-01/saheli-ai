import React from 'react';
import { Volume2, CheckCircle2, ArrowRight, FileText, IdCard, Landmark, Users } from 'lucide-react';

export default function SchemeCard({ scheme, currentLang, onSpeak, onSelectScheme }) {
  const title = scheme.title[currentLang] || scheme.title['hi-IN'];
  const shortDesc = scheme.shortDesc[currentLang] || scheme.shortDesc['hi-IN'];
  const audioText = scheme.audioText[currentLang] || scheme.audioText['hi-IN'];

  return (
    <div className="bg-white rounded-3xl border-2 border-rose-200 hover:border-rose-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group no-print">
      
      <div>
        {/* Scheme Image & Cash Amount Overlay */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-rose-100">
          <img
            src={scheme.image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute top-3 left-3 bg-amber-400 text-rose-950 font-black text-xs px-3 py-1 rounded-full shadow border border-amber-200">
            {scheme.category}
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="bg-rose-600 text-white font-black text-lg sm:text-xl px-3.5 py-1 rounded-xl shadow-lg border border-rose-400">
              सहायता: {scheme.amount}
            </div>

            {/* Audio Listen Button */}
            <button
              onClick={() => onSpeak(audioText, currentLang)}
              className="bg-amber-400 hover:bg-amber-300 text-rose-950 font-bold text-xs px-3 py-2 rounded-full shadow-lg flex items-center space-x-1.5 transition transform active:scale-90"
              title="Listen aloud in your language"
            >
              <Volume2 className="w-4 h-4 text-rose-950 animate-pulse" />
              <span>सुनें</span>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          <h3 className="text-xl font-black text-rose-950 leading-snug">
            {title}
          </h3>

          <p className="text-sm text-gray-700 font-medium leading-relaxed">
            {shortDesc}
          </p>

          {/* Key Documents Icons */}
          <div className="pt-2 border-t border-rose-100">
            <span className="text-xs font-bold text-rose-900 uppercase tracking-wider block mb-2">
              जरूरी कागज (Documents):
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {scheme.documents.map((doc, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-gray-800 font-semibold bg-rose-50/70 p-2 rounded-lg border border-rose-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{doc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-5 pt-0">
        <button
          onClick={() => onSelectScheme(scheme)}
          className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black text-sm py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition transform active:scale-95 flex items-center justify-center space-x-2"
        >
          <span>पात्रता जाँचें व मदद लें</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
