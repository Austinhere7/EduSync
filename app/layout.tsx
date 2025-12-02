import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Virtual Study Group - Collaborative Learning Platform',
  description: 'Collaborate with peers, share notes, and learn together in a virtual environment. Join study sessions, ask questions, and enhance your academic performance.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
