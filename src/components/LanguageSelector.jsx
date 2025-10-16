import React from "react";

const LanguageSelector = ({ currentLanguage, onLanguageChange, disabled }) => {
  const languages = [
    { code: "en-US", name: "English (US)" },
    { code: "en-GB", name: "English (UK)" },
    { code: "es-ES", name: "Spanish" },
    { code: "fr-FR", name: "French" },
    { code: "de-DE", name: "German" },
    { code: "it-IT", name: "Italian" },
    { code: "pt-BR", name: "Portuguese (Brazil)" },
    { code: "ja-JP", name: "Japanese" },
    { code: "ko-KR", name: "Korean" },
    { code: "zh-CN", name: "Chinese (Mandarin)" },
    { code: "hi-IN", name: "Hindi" },
    { code: "ar-SA", name: "Arabic" },
    { code: "ru-RU", name: "Russian" },
  ];

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Language:</label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        disabled={disabled}
        className="language-dropdown"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
