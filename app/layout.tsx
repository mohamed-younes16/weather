import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather app',
  description: 'weather app createed by nextJS ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='  overflow-x-hidden bg-gradient-to-br min-h-screen   from-[#394f68] to-[#183B7e]'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
