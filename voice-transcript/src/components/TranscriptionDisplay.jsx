import React, { useState } from "react";

const TranscriptionDisplay = ({ transcript, isListening }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transcript);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = transcript;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([transcript], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `transcription_${
      new Date().toISOString().split("T")[0]
    }.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="transcription-container">
      <div className="transcription-header">
        <h3>Transcription</h3>
        {isListening && (
          <span className="listening-indicator">Listening...</span>
        )}
      </div>

      <div className="transcription-box">
        {transcript ? (
          <textarea
            value={transcript}
            onChange={(e) => {}} // Read-only for now, could make editable later
            className="transcription-text"
            placeholder="Your speech will appear here..."
            readOnly
          />
        ) : (
          <div className="placeholder-text">
            <p>🎤 Click "Start Recording" and begin speaking</p>
            <p>Your words will appear here in real-time</p>
          </div>
        )}
      </div>

      {transcript && (
        <div className="action-buttons">
          <button
            className="copy-btn"
            onClick={handleCopy}
            disabled={!transcript}
          >
            {copySuccess ? "✅ Copied!" : "📋 Copy"}
          </button>

          <button
            className="download-btn"
            onClick={handleDownload}
            disabled={!transcript}
          >
            💾 Download
          </button>
        </div>
      )}

      {transcript && (
        <div className="word-count">
          <span>
            {transcript.split(" ").filter((word) => word.length > 0).length}{" "}
            words
          </span>
        </div>
      )}
    </div>
  );
};

export default TranscriptionDisplay;
