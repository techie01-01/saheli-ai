import React, { useState, useEffect } from 'react';
import { X, Volume2, CheckCircle2, ArrowRight, Sparkles, Check, AlertCircle, Printer, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EligibilityWizardModal({
  scheme,
  currentLang,
  onClose,
  onSpeak,
  onGeneratePass
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isEligible, setIsEligible] = useState(true);
  const [completed, setCompleted] = useState(false);

  const questions = scheme.questions;
  const currentQuestion = questions[currentStep];

  useEffect(() => {
    if (scheme && currentQuestion) {
      const qText = currentQuestion.text[currentLang] || currentQuestion.text['hi-IN'];
      onSpeak(qText, currentLang);
    }
  }, [currentStep, scheme]);

  const handleAnswer = (val) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }));

    if (val === false) {
      setIsEligible(false);
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      onSpeak("बधाई हो! आपकी पात्रता जाँच पूरी हो गई है। नीचे आपका योजना पर्चा तैयार है।", currentLang);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto no-print-modal">
      
      <div className="bg-white rounded-3xl max-w-2xl w-full border-4 border-amber-400 shadow-2xl overflow-hidden relative my-8">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-rose-700 via-pink-700 to-amber-700 text-white p-5 flex items-center justify-between no-print">
          <div className="flex items-center space-x-3">
            <img src={scheme.image} alt={scheme.title['hi-IN']} className="w-12 h-12 rounded-xl object-cover border-2 border-amber-300" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-amber-200">
                {scheme.title[currentLang] || scheme.title['hi-IN']}
              </h3>
              <p className="text-xs text-rose-100">आवाज आधारित पात्रता जाँच (Voice Eligibility Assistant)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Content */}
        {!completed ? (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            
            {/* Step counter bar */}
            <div className="flex items-center justify-between text-xs font-bold text-rose-800 uppercase tracking-wider">
              <span>सवाल {currentStep + 1} / {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% पूरा</span>
            </div>

            <div className="w-full bg-rose-100 h-3 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-rose-600 to-amber-500 h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Display */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 shadow-inner space-y-4">
              <button
                onClick={() => onSpeak(currentQuestion.text[currentLang] || currentQuestion.text['hi-IN'], currentLang)}
                className="inline-flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-300 text-rose-950 font-bold text-xs px-3 py-1 rounded-full shadow"
              >
                <Volume2 className="w-4 h-4" />
                <span>सवाल सुनें</span>
              </button>

              <h4 className="text-xl sm:text-2xl font-black text-rose-950">
                {currentQuestion.text[currentLang] || currentQuestion.text['hi-IN']}
              </h4>
            </div>

            {/* Huge Touch Buttons: YES / NO */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              <button
                onClick={() => handleAnswer(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl sm:text-2xl py-6 rounded-2xl shadow-xl transition transform active:scale-95 flex flex-col items-center justify-center border-4 border-emerald-400"
              >
                <Check className="w-10 h-10 mb-1" />
                <span>हाँ (YES)</span>
              </button>

              <button
                onClick={() => handleAnswer(false)}
                className="bg-rose-600 hover:bg-rose-700 text-white font-black text-xl sm:text-2xl py-6 rounded-2xl shadow-xl transition transform active:scale-95 flex flex-col items-center justify-center border-4 border-rose-400"
              >
                <X className="w-10 h-10 mb-1" />
                <span>नहीं (NO)</span>
              </button>
            </div>

          </div>
        ) : (
          /* Completion & Scheme Pass Preview */
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-5 text-center space-y-2">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-emerald-950">
                बधाई हो! आप पात्र हैं (Eligible!)
              </h4>
              <p className="text-sm text-emerald-800 font-semibold">
                आप {scheme.title['hi-IN']} के तहत लाभ लेने के लिए योग्य हैं।
              </p>
            </div>

            {/* Action Steps */}
            <div className="space-y-3">
              <h5 className="font-extrabold text-rose-950 text-base flex items-center">
                <CheckCircle2 className="w-5 h-5 text-rose-600 mr-2" />
                आगे क्या करें (Next Steps):
              </h5>
              <ol className="space-y-2 text-sm font-semibold text-gray-800 bg-rose-50 p-4 rounded-xl border border-rose-200">
                {scheme.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="bg-rose-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Document Checklist */}
            <div className="space-y-3">
              <h5 className="font-extrabold text-rose-950 text-base">साथ ले जाने वाले जरूरी कागज (Documents to Carry):</h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scheme.documents.map((doc, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border-2 border-amber-300 shadow-sm text-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                    <span className="text-xs font-bold text-gray-900 block">{doc.name}</span>
                    <span className="text-[10px] text-gray-500 block">{doc.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Print / Save Card Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 bg-amber-400 hover:bg-amber-300 text-rose-950 font-black text-base py-3.5 px-4 rounded-xl shadow-lg transition transform active:scale-95 flex items-center justify-center space-x-2 border border-amber-300"
              >
                <Printer className="w-5 h-5" />
                <span>पात्रता पर्ची डाउनलोड / प्रिंट करें</span>
              </button>

              <button
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-sm px-6 py-3.5 rounded-xl transition"
              >
                बंद करें
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
