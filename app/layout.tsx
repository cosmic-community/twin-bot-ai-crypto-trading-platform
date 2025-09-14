import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twin Bot - AI Crypto Trading Platform',
  description: 'Smart crypto investing with guaranteed transparency. Daily ROI up to 1.2%, referral rewards, and secure withdrawals powered by blockchain automation.',
  keywords: 'crypto, trading, AI, blockchain, ROI, referral, Twin Bot',
  authors: [{ name: 'Twin Bot Team' }],
  openGraph: {
    title: 'Twin Bot - AI Crypto Trading Platform',
    description: 'Smart crypto investing with guaranteed transparency. Daily ROI up to 1.2%, referral rewards, and secure withdrawals powered by blockchain automation.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1200&h=630&fit=crop&auto=format',
        width: 1200,
        height: 630,
        alt: 'Twin Bot - AI Crypto Trading Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twin Bot - AI Crypto Trading Platform',
    description: 'Smart crypto investing with guaranteed transparency. Daily ROI up to 1.2%, referral rewards, and secure withdrawals powered by blockchain automation.',
    images: ['https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1200&h=630&fit=crop&auto=format'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Aurora background effects */}
        <div className="aurora-background" />
        
        {/* Floating orbs */}
        <div className="floating-orb" />
        <div className="floating-orb" />
        <div className="floating-orb" />
        <div className="floating-orb" />
        
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Built with Cosmic badge */}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}