import React, { useState } from 'react';
import { X, Key, Check, Trash2, ExternalLink } from 'lucide-react';
import { getStoredApiKey, saveStoredApiKey } from '../services/gemini';

export default function ApiKeyModal({ onClose, onKeyUpdated }) {
  const [keyInput, setKeyInput] = useState(getStoredApiKey());
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    saveStoredApiKey(keyInput);
    setSaved(true);
    onKeyUpdated();
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  const handleClear = () => {
    setKeyInput('');
    saveStoredApiKey('');
    onKeyUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 no-print">
      <div className="bg-white rounded-3xl max-w-md w-full border-2 border-rose-300 shadow-2xl p-6 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-rose-800 font-extrabold text-base mb-2">
          <Key className="w-5 h-5 text-amber-500" />
          <span>Google Gemini API Key Configurator</span>
        </div>

        <p className="text-xs text-gray-600 mb-4">
          Provide your Google Gemini API key to enable live online Generative AI calls, or leave empty to use our pre-baked instant intelligent response engine.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Gemini API Key:
            </label>
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full border-2 border-rose-200 focus:border-rose-500 rounded-xl px-3.5 py-2.5 text-sm font-mono text-gray-800 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-rose-700 font-medium">
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center"
            >
              <span>Get Free Gemini Key from AI Studio</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <button
              type="submit"
              className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm py-2.5 rounded-xl shadow transition flex items-center justify-center space-x-1"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Key</span>
              )}
            </button>

            {keyInput && (
              <button
                type="button"
                onClick={handleClear}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2.5 rounded-xl transition"
                title="Clear API Key"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>

      </div>
    </div>
  );
}
