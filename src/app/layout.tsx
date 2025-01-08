import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://karpor.kusionstack.io'),
  title: 'Karpor - Intelligence for Kubernetes',
  description: 'Advanced Search and Insight capabilities for your Kubernetes clusters across any clouds. Powered by LLM, providing real-time insights and expert-level solutions.',
  keywords: [
    'Kubernetes',
    'Intelligence',
    'Search',
    'AI',
    'LLM',
    'Resource Insights',
    'Compliance Monitoring',
    'Resource Visualization',
    'AI Assistant',
    'Cloud Native',
    'Multi Cluster',
    'Real-time Synchronization',
    'Smart Queries'
  ],
  authors: [{ name: 'The Karpor Authors' }],
  creator: 'KusionStack',
  publisher: 'KusionStack',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/logo192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/logo192.png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://karpor.kusionstack.io/',
    title: 'Karpor - Intelligence for Kubernetes',
    description: 'Advanced Search and Insight capabilities for your Kubernetes clusters across any clouds. Powered by LLM, providing real-time insights and expert-level solutions.',
    siteName: 'Karpor',
    images: [
      {
        url: '/logo512.png',
        width: 512,
        height: 512,
        alt: 'Karpor Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karpor - Intelligence for Kubernetes',
    description: 'Advanced Search and Insight capabilities for your Kubernetes clusters across any clouds. Powered by LLM, providing real-time insights and expert-level solutions.',
    images: ['/logo512.png'],
  },
  other: {
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="license" href="http://www.apache.org/licenses/LICENSE-2.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
