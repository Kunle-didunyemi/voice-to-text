import React from "react";

const RecordingControls = ({
  isListening,
  isSupported,
  onStart,
  onStop,
  onReset,
  error,
}) => {
  return (
    <div className="recording-controls">
      {!isSupported ? (
        <div className="browser-warning">
          <p>⚠️ Speech recognition is not supported in this browser.</p>
          <p>Please use Chrome, Edge, or Safari for the best experience.</p>
        </div>
      ) : (
        <div className="controls-container">
          <button
            className={`record-btn ${isListening ? "recording" : ""}`}
            onClick={isListening ? onStop : onStart}
            disabled={!isSupported}
          >
            {isListening ? (
              <>
                <span className="recording-indicator">🔴</span>
                Stop Recording
              </>
            ) : (
              <>
                <span className="mic-icon">🎤</span>
                Start Recording
              </>
            )}
          </button>

          <button
            className="reset-btn"
            onClick={onReset}
            disabled={isListening}
          >
            🗑️ Clear
          </button>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>❌ Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default RecordingControls;
