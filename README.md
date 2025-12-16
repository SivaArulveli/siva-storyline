# Divine Saga Weaver

A sacred timeline celebrating the Gurupooja tradition of **Sri Siva Swamigal**, featuring an immersive, interactive web experience built with modern web technologies.

## ✨ Features

- **Interactive Sacred Timeline**: Journey through 17 years of Gurupooja celebrations (2009-2025)
- **Keyboard Navigation**: Navigate between events using arrow keys (← →)
- **Event Details**: Click any card or press Enter to view full event information
- **3D Card Effects**: Subtle tilt animations on hover for premium feel
- **Scroll Progress**: Visual indicators showing your position in the timeline
- **Floating Particles**: Ambient sacred symbols (ॐ, 🪷) creating contemplative atmosphere
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard support and screen reader friendly

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SivaArulveli/divine-saga-weaver.git
cd divine-saga-weaver

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

## 📦 Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist` directory.

## 🔥 Firebase Deployment

### Setup

1. **Create Firebase Project**

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Enable Firebase Hosting

2. **Update Firebase Configuration**

   - Edit `.firebaserc` and replace `your-firebase-project-id` with your actual project ID

3. **Configure GitHub Secrets**

   Add the following secrets to your GitHub repository (Settings > Secrets and variables > Actions):

   - `FIREBASE_SERVICE_ACCOUNT`: Your Firebase service account JSON

     - Go to Project Settings > Service Accounts
     - Click "Generate New Private Key"
     - Copy the entire JSON content

   - `FIREBASE_PROJECT_ID`: Your Firebase project ID

### Automatic Deployment

Push to the `main` branch to trigger automatic deployment:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will automatically build and deploy to Firebase Hosting.

### Manual Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy --only hosting
```

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Firebase Hosting
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
divine-saga-weaver/
├── src/
│   ├── components/
│   │   ├── storyline/        # Timeline components
│   │   │   ├── TimelineCard.tsx
│   │   │   ├── EraSection.tsx
│   │   │   ├── EventDetails.tsx
│   │   │   └── TimelineRail.tsx
│   │   ├── FloatingParticles.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── BackToTop.tsx
│   ├── data/
│   │   └── timeline.ts        # Timeline data
│   ├── hooks/
│   │   ├── use-keyboard-navigation.ts
│   │   └── use-media-query.ts
│   ├── pages/
│   │   └── Index.tsx          # Main page
│   └── assets/                # Images and media
├── public/
│   └── images/                # Public images
├── .github/
│   └── workflows/
│       └── deploy.yml         # Firebase deployment workflow
├── firebase.json              # Firebase configuration
├── .firebaserc                # Firebase project config
└── package.json
```

## ⌨️ Keyboard Shortcuts

- `→` (Right Arrow): Navigate to next event
- `←` (Left Arrow): Navigate to previous event
- `Enter`: Open event details for focused card
- `Escape`: Close event details dialog

## 🎨 Design Principles

- **Sacred Aesthetic**: Gold gradients, sacred symbols, contemplative feel
- **Performance First**: 60fps animations, optimized rendering
- **Accessibility**: Keyboard navigation, screen reader support
- **Progressive Enhancement**: Core functionality works without JavaScript

## 📝 License

This project is created to honor Sri Siva Swamigal's legacy and the Gurupooja tradition.

## 🙏 Acknowledgments

Created with devotion to preserve and share the sacred timeline of Sri Siva Swamigal's Gurupooja celebrations.

---

**Om Namah Sivaya** 🕉️
