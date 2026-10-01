import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GeminiVoiceAssistant from './components/GeminiVoiceAssistant';
import SchemeGrid from './components/SchemeGrid';
import EligibilityWizardModal from './components/EligibilityWizardModal';
import JudgeOverviewModal from './components/JudgeOverviewModal';
import ApiKeyModal from './components/ApiKeyModal';
import Footer from './components/Footer';

import { SCHEMES } from './data/schemes';
import { askSaheliAI, getStoredApiKey } from './services/gemini';
import { useSpeech } from './hooks/useSpeech';

export default function App() {
  const [currentLang, setCurrentLang] = useState('hi-IN');
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [matchedScheme, setMatchedScheme] = useState(null);

  const [activeModalScheme, setActiveModalScheme] = useState(null);
  const [showJudgeModal, setShowJudgeModal] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [apiKeySet, setApiKeySet] = useState(false);

  const {
    isSpeaking,
    isListening,
    transcript,
    speakText,
    stopSpeech,
    startListening,
    stopListening
  } = useSpeech();

  useEffect(() => {
    setApiKeySet(!!getStoredApiKey());
  }, []);

  // Sync transcript from speech hook
  useEffect(() => {
    if (transcript) {
      setUserInput(transcript);
    }
  }, [transcript]);

  const handlePlayWelcome = () => {
    const welcomeMsg = "नमस्ते! मैं आपकी सहेली AI हूँ। मुझे बोलकर बताएं कि आपको किस तरह की सहायता चाहिए, जैसे कि गर्भवती महिला मदद, सिलाई लोन या बेटी की पढ़ाई की बचत।";
    speakText(welcomeMsg, currentLang);
  };

  const handleStartMic = () => {
    stopSpeech();
    setUserInput('');
    setAiResponse('');
    setMatchedScheme(null);
    startListening(currentLang, (finalText) => {
      processVoiceQuery(finalText);
    });
  };

  const handlePhraseClick = (phrase) => {
    stopSpeech();
    setUserInput(phrase);
    processVoiceQuery(phrase);
  };

  const processVoiceQuery = async (query) => {
    if (!query || query.trim().length === 0) return;

    setIsProcessing(true);
    setAiResponse('');

    try {
      const response = await askSaheliAI(query, currentLang);
      setAiResponse(response);
      setIsProcessing(false);

      // Match scheme from query content
      const queryLower = query.toLowerCase();
      let found = null;
      if (queryLower.includes('गर्भवती') || queryLower.includes('बच्चा') || queryLower.includes('मां') || queryLower.includes('maternity')) {
        found = SCHEMES.find(s => s.id === 'pmmvy');
      } else if (queryLower.includes('सिलाई') || queryLower.includes('काम') || queryLower.includes('व्यापार') || queryLower.includes('loan')) {
        found = SCHEMES.find(s => s.id === 'lakhpati');
      } else if (queryLower.includes('बेटी') || queryLower.includes('लड़की') || queryLower.includes('daughter') || queryLower.includes('saving')) {
        found = SCHEMES.find(s => s.id === 'sukanya');
      }

      setMatchedScheme(found || SCHEMES[0]);

      // Speak back the response
      speakText(response, currentLang);
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
    }
  };

  const handleResetAssistant = () => {
    stopSpeech();
    setUserInput('');
    setAiResponse('');
    setMatchedScheme(null);
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex flex-col font-sans text-gray-900 selection:bg-rose-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        onOpenJudgeModal={() => setShowJudgeModal(true)}
        onOpenKeyModal={() => setShowKeyModal(true)}
        apiKeySet={apiKeySet}
        speakText={speakText}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          isListening={isListening}
          isSpeaking={isSpeaking}
          onStartMic={handleStartMic}
          onStopMic={stopListening}
          onPhraseClick={handlePhraseClick}
          onPlayWelcome={handlePlayWelcome}
          currentLang={currentLang}
        />

        {/* Gemini Voice AI Interactive Answer Box */}
        <GeminiVoiceAssistant
          userInput={userInput}
          aiResponse={aiResponse}
          isProcessing={isProcessing}
          matchedScheme={matchedScheme}
          onSpeak={(text) => speakText(text, currentLang)}
          onStartWizard={(scheme) => setActiveModalScheme(scheme)}
          onReset={handleResetAssistant}
        />

        {/* Schemes Grid */}
        <SchemeGrid
          currentLang={currentLang}
          onSpeak={(text, lang) => speakText(text, lang)}
          onSelectScheme={(scheme) => setActiveModalScheme(scheme)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenJudgeModal={() => setShowJudgeModal(true)} />

      {/* Eligibility Wizard Modal */}
      {activeModalScheme && (
        <EligibilityWizardModal
          scheme={activeModalScheme}
          currentLang={currentLang}
          onClose={() => setActiveModalScheme(null)}
          onSpeak={(text, lang) => speakText(text, lang)}
        />
      )}

      {/* Judge Presentation & SDG Overview Modal */}
      {showJudgeModal && (
        <JudgeOverviewModal onClose={() => setShowJudgeModal(false)} />
      )}

      {/* Gemini API Key Configurator Modal */}
      {showKeyModal && (
        <ApiKeyModal
          onClose={() => setShowKeyModal(false)}
          onKeyUpdated={() => setApiKeySet(!!getStoredApiKey())}
        />
      )}

    </div>
  );
}
