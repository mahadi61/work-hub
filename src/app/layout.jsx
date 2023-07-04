import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Work Hub',
  description: 'Freelance Services Marketplace',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50 text-neutral-900 min-h-screen`}>{children}</body>
    </html>
  )
}

export default RootLayout;
