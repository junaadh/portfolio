import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Junaadh Portfolio',
  description: 'Portfolio of Moosa Junaadh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
