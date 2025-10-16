# 🎤 VoiceNote - Voice to Text Transcription App

A minimalistic web application that converts speech to text using the browser's built-in Web Speech API. No accounts, no backend, no cost - just speak and get instant transcriptions.

## ✨ Features

- **Real-time Speech Recognition**: Start speaking and see text appear instantly
- **Multiple Languages**: Support for 13+ languages including English, Spanish, French, German, and more
- **Copy to Clipboard**: One-click copying of transcribed text
- **Download Transcriptions**: Save your speech as text files
- **Recent History**: Automatically saves your last 10 transcriptions locally
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **No Data Collection**: Everything stays in your browser

## 🚀 Quick Start

1. **Clone or download** this project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** to `http://localhost:5173`
5. **Click "Start Recording"** and begin speaking!

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite
- **Styling**: CSS3 with modern gradients and animations
- **Speech Recognition**: Browser Web Speech API (no external services)
- **Storage**: LocalStorage for recent transcriptions

## 🌐 Browser Support

- ✅ **Chrome/Chromium** (full support)
- ✅ **Microsoft Edge** (full support)
- ✅ **Safari** (good support)
- ⚠️ **Firefox** (limited support)

## 📱 How to Use

1. **Allow microphone access** when prompted
2. **Select your language** from the dropdown
3. **Click "Start Recording"** and speak clearly
4. **Watch your words appear** in real-time
5. **Click "Stop Recording"** when finished
6. **Copy or download** your transcription

## 🎯 Use Cases

- **Students**: Record lecture notes quickly
- **Professionals**: Transcribe meetings and interviews
- **Writers**: Dictate ideas and stories
- **Accessibility**: Help for those who type slowly
- **Multilingual**: Practice language skills

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── RecordingControls.jsx    # Start/stop recording buttons
│   ├── TranscriptionDisplay.jsx # Text display with copy/download
│   ├── LanguageSelector.jsx     # Language selection dropdown
│   └── RecentTranscriptions.jsx # Recent history component
├── hooks/
│   ├── useSpeechRecognition.js  # Web Speech API logic
│   └── useLocalStorage.js       # Local storage management
├── App.jsx                      # Main application component
└── App.css                      # Styling
```

## 🔒 Privacy & Security

- **No data sent to servers** - everything processes locally in your browser
- **No user accounts** - no personal information stored
- **Local storage only** - transcriptions saved on your device only
- **Microphone permission** - only used when you click record

## 🚀 Deployment

The app can be deployed to any static hosting service:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Use GitHub Actions for deployment

## 🤝 Contributing

This is a simple, focused app. Feel free to:

- Report bugs
- Suggest improvements
- Add new languages
- Improve the UI/UX

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ using React, Vite, and the Web Speech API**
