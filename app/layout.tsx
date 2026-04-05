import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Takween Technologies | Data Centre & Robotics Solutions in Saudi Arabia',
  description: 'Data Centre Intelligence, Autonomous Robotics & Critical Infrastructure for the Kingdom of Saudi Arabia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#080806] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
