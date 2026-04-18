import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UtahPlumbCode — 2021 IPC + Utah Amendments',
  description: 'The fastest way for Utah licensed plumbers to look up the 2021 IPC with all Utah statewide amendments highlighted.',
  keywords: 'Utah plumbing code, IPC, plumber, Utah amendments, DOPL, backflow, gas sizing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="h-screen overflow-hidden bg-white">{children}</body>
    </html>
  )
}
