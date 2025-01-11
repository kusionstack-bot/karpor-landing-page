# Karpor Landing Page

[English](./README.md) | [中文](./README_zh.md)

### Introduction

This is the landing page for Karpor, a Kubernetes Explorer focusing on Search, Insight, and AI capabilities. Built with Next.js and Tailwind CSS, it provides a modern and responsive user interface to showcase Karpor's features.

### Quick Start

1. **Setup**
   ```bash
   # Clone the repository
   git clone https://github.com/KusionStack/karpor-landing-page.git
   cd karpor-landing-page

   # Install dependencies
   npm install
   ```

2. **Configuration**
   ```bash
   # Create .env.local and add your GA ID
   echo "NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX" > .env.local
   ```

3. **Development**
   ```bash
   # Start development server
   npm run dev
   ```

4. **Production**
   ```bash
   # Build and start
   npm run build
   npm start
   ```

5. **Deployment (Vercel)**
   - Push to GitHub
   - Import to Vercel
   - Add `NEXT_PUBLIC_GA_ID` in project settings

### Features

- 🎨 **Modern UI/UX**: Clean and intuitive interface with smooth transitions
- 📱 **Responsive Design**: Optimized for all devices from mobile to desktop
- ⚡ **Performance**: Fast loading with optimized assets and code splitting
- 📊 **Analytics**: Built-in Google Analytics support

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

### Google Analytics Events

The following events are tracked in Google Analytics:

### Navigation Events
- Category: `Navigation`
  - Logo Click (`label: 'Logo'`)
  - Navigation Links Click (`label: [link name]`)
  - Get Started Button Click (`label: 'Get Started'`)

### Hero Section Events
- Category: `Hero`
  - GitHub Button Click (`label: 'GitHub Button'`)
  - Live Demo Button Click (`label: 'Live Demo Button'`)
  - Product Hunt Button Click (`label: 'Product Hunt Button'`)

### CTA Section Events
- Category: `CTA`
  - Copy Command Click (`label: 'Copy Command'`)
  - Advanced Installation Link Click (`label: 'Advanced Installation'`)

All events include:
- `action: 'click'`
- `category: ['Navigation', 'Hero', 'CTA']`
- `label: [specific button/link name]`
- `value: 1`

You can view these events in Google Analytics under:
- Behavior > Events > Overview
- Behavior > Events > Top Events

### Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Google Analytics 4

### Community

- ⭐ Star us on [GitHub](https://github.com/KusionStack/karpor)
- 🏆 Support us on [Product Hunt](https://www.producthunt.com/posts/karpor)

### License

Apache License 2.0
