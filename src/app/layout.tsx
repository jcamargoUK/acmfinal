import './globals.css'
import type { Metadata } from 'next'
 


export const metadata: Metadata = {
  title: 'CMS COMPLIENCE',
  description: 'CMS COMPLIENCE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
