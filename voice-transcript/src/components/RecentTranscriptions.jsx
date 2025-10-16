import React from "react";

const RecentTranscriptions = ({ transcriptions, onSelect, onClear }) => {
  if (transcriptions.length === 0) {
    return null;
  }

  return (
    <div className="recent-transcriptions">
      <div className="recent-header">
        <h4>Recent Transcriptions</h4>
        <button className="clear-recent-btn" onClick={onClear}>
          Clear All
        </button>
      </div>

      <div className="recent-list">
        {transcriptions.slice(0, 5).map((item, index) => (
          <div key={index} className="recent-item">
            <div className="recent-preview">
              {item.text.length > 50
                ? `${item.text.substring(0, 50)}...`
                : item.text}
            </div>
            <div className="recent-meta">
              <span className="recent-date">
                {new Date(item.timestamp).toLocaleDateString()}
              </span>
              <span className="recent-words">{item.wordCount} words</span>
            </div>
            <button
              className="load-recent-btn"
              onClick={() => onSelect(item.text)}
            >
              Load
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTranscriptions;
