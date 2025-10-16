import React from "react";

const RecentTranscriptions = ({ transcriptions, onSelect, onClear }) => {
  if (transcriptions.length === 0) {
    return null;
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    return date.toLocaleDateString();
  };

  return (
    <div className="recent-transcriptions">
      <div className="recent-header">
        <div className="recent-title-section">
          <div className="recent-icon">📝</div>
          <h4>Recent Notes</h4>
        </div>
        <button
          className="clear-recent-btn"
          onClick={onClear}
          title="Clear all transcriptions"
        >
          🗑️
        </button>
      </div>

      <div className="recent-list">
        {transcriptions.slice(0, 5).map((item, index) => (
          <div key={index} className="recent-item">
            <div className="recent-content">
              <div className="recent-text">
                {item.text.length > 80
                  ? `${item.text.substring(0, 80)}...`
                  : item.text}
              </div>
              <div className="recent-stats">
                <span className="word-count">{item.wordCount} words</span>
                <span className="timestamp">{formatTime(item.timestamp)}</span>
              </div>
            </div>
            <button
              className="load-btn"
              onClick={() => onSelect(item.text)}
              title="Load this transcription"
            >
              ↗️
            </button>
          </div>
        ))}
      </div>

      {transcriptions.length > 5 && (
        <div className="recent-footer">
          <span className="more-count">+{transcriptions.length - 5} more</span>
        </div>
      )}
    </div>
  );
};

export default RecentTranscriptions;
