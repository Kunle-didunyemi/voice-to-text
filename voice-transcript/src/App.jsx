import React, { useEffect } from "react";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { useLocalStorage } from "./hooks/useLocalStorage";
import RecordingControls from "./components/RecordingControls";
import TranscriptionDisplay from "./components/TranscriptionDisplay";
import LanguageSelector from "./components/LanguageSelector";
import RecentTranscriptions from "./components/RecentTranscriptions";
import "./App.css";

function App() {
  const {
    transcript,
    isListening,
    isSupported,
    error,
    startListening,
    stopListening,
    resetTranscript,
    setLanguage,
  } = useSpeechRecognition();

  const [recentTranscriptions, setRecentTranscriptions, clearRecent] =
    useLocalStorage("voice-transcript-recent", []);
  const [previousTranscript, setPreviousTranscript] = React.useState("");

  // Save transcription when recording stops and we have new content
  useEffect(() => {
    if (
      !isListening &&
      transcript &&
      transcript !== previousTranscript &&
      transcript.trim().length > 0
    ) {
      const wordCount = transcript
        .split(" ")
        .filter((word) => word.length > 0).length;
      const newTranscription = {
        text: transcript,
        timestamp: Date.now(),
        wordCount,
      };

      setRecentTranscriptions((prev) => [
        newTranscription,
        ...prev.slice(0, 9),
      ]); // Keep last 10
      setPreviousTranscript(transcript);
    }
  }, [isListening, transcript, previousTranscript, setRecentTranscriptions]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleLoadRecent = (text) => {
    // This would require modifying the hook to allow setting transcript externally
    // For now, we'll just copy to clipboard
    navigator.clipboard.writeText(text);
  };

  const handleClearRecent = () => {
    clearRecent();
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎤 VoiceNote</h1>
        <p>Convert your speech to text instantly</p>
      </header>

      <div className="app-layout">
        <main className="app-main">
          <div className="settings-bar">
            <LanguageSelector
              currentLanguage="en-US"
              onLanguageChange={handleLanguageChange}
              disabled={isListening}
            />
          </div>

          <RecordingControls
            isListening={isListening}
            isSupported={isSupported}
            onStart={startListening}
            onStop={stopListening}
            onReset={resetTranscript}
            error={error}
          />

          <TranscriptionDisplay
            transcript={transcript}
            isListening={isListening}
          />
        </main>

        {recentTranscriptions.length > 0 && (
          <aside className="app-sidebar">
            <RecentTranscriptions
              transcriptions={recentTranscriptions}
              onSelect={handleLoadRecent}
              onClear={handleClearRecent}
            />
          </aside>
        )}
      </div>

      <footer className="app-footer">
        <p>Works best in Chrome, Edge, or Safari browsers</p>
      </footer>
    </div>
  );
}

export default App;
