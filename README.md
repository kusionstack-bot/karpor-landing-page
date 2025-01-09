# Karpor Landing Page

[English](./README.md) | [中文](./README_zh.md)

### Introduction

This is the landing page for Karpor, a Kubernetes Explorer focusing on Search, Insight, and AI capabilities. Built with Next.js and Tailwind CSS, it provides a modern and responsive user interface to showcase Karpor's features.

### Features

- 🎨 **Modern UI/UX**: Clean and intuitive interface with smooth transitions
- 📱 **Responsive Design**: Optimized for all devices from mobile to desktop
- ⚡ **Performance**: Fast loading with optimized assets and code splitting
- 📊 **Analytics**: Built-in Google Analytics support

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Your Google Analytics Measurement ID
```

For production deployment on Vercel:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add `NEXT_PUBLIC_GA_ID` with your GA Measurement ID
4. Select the environments where it should be available (Production/Preview/Development)

### Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Google Analytics 4

### License

Apache License 2.0
