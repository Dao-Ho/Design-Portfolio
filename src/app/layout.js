import { Inter } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Dao Ho',
  description: 'Design Portfolio by Dao Ho',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
