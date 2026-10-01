import React from 'react';
import SchemeCard from './SchemeCard';
import { SCHEMES } from '../data/schemes';
import { HeartHandshake } from 'lucide-react';

export default function SchemeGrid({ currentLang, onSpeak, onSelectScheme }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 no-print">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-rose-200">
        <div>
          <div className="flex items-center space-x-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
            <HeartHandshake className="w-4 h-4" />
            <span>ग्रामीण महिला कल्याण (Essential Government Services)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-rose-950">
            मुख्य योजनाएं (Popular Women Schemes)
          </h2>
        </div>
        <p className="text-sm text-gray-600 font-medium mt-2 md:mt-0">
          किसी भी योजना पर क्लिक करें और बोलकर जानकारी लें
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SCHEMES.map(scheme => (
          <SchemeCard
            key={scheme.id}
            scheme={scheme}
            currentLang={currentLang}
            onSpeak={onSpeak}
            onSelectScheme={onSelectScheme}
          />
        ))}
      </div>

    </section>
  );
}
