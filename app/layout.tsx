import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'PARS Health | AI-Powered Emergency Triage & Medical Coding',
  description: 'PARS Health revolutionizes emergency operations with AI-powered triage and autonomous medical coding. Trusted by leading healthcare systems.',
  generator: 'v0.app',
  keywords: ['healthcare AI', 'emergency triage', 'medical coding', 'healthcare operations', 'AI solutions'],
  authors: [{ name: 'PARS Health' }],
  openGraph: {
    title: 'PARS Health | AI-Powered Emergency Triage & Medical Coding',
    description: 'PARS Health revolutionizes emergency operations with AI-powered triage and autonomous medical coding.',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#071a35' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased text-foreground">
        {/* Video Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/bg-vid.mp4" type="video/mp4" />
          </video>
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        {children}
        <Toaster richColors position="top-center" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
