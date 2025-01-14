import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://karpor.kusionstack.io'),
  title: 'Karpor - Intelligence for Kubernetes',
  description: 'Advanced Search and Insight capabilities for your Kubernetes clusters across any clouds. Powered by LLM, providing real-time insights and expert-level solutions',
  keywords: [
    'Kubernetes',
    'K8s',
    'Resource Explorer',
    'Search',
    'Insight',
    'AI',
    'Cloud Native',
  ],
  authors: [{ name: 'KusionStack' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },  // Basic favicon
      { url: '/logo192.png', sizes: '192x192', type: 'image/png' },  // PWA icon
      { url: '/logo512.png', sizes: '512x512', type: 'image/png' },  // PWA large icon
    ],
    apple: [
      { url: '/logo192.png' },  // Temporary iOS icon using logo192
    ],
  },
  manifest: '/manifest.json',  // PWA manifest file
  alternates: {
    canonical: 'https://karpor.kusionstack.io',
  },
  openGraph: {
    title: 'Karpor - Intelligence for Kubernetes',
    description:
      'Advanced Search and Insight capabilities for your Kubernetes clusters across any clouds. Powered by LLM, providing real-time insights and expert-level solutions',
    url: 'https://karpor.kusionstack.io',
    siteName: 'Karpor',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo512.png',
        width: 512,
        height: 512,
        alt: 'Karpor Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karpor - Intelligence for Kubernetes',
    description:
      'Advanced Search and Insight capabilities for your Kubernetes clusters across any clouds. Powered by LLM, providing real-time insights and expert-level solutions',
    creator: '@KusionStack',
    images: ['/logo512.png']
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
