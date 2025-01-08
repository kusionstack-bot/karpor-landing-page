import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karpor - Intelligence for Kubernetes',
  description: 'Advanced Search, Insight and AI capabilities for your Kubernetes clusters across any clouds',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/logo192.png' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
