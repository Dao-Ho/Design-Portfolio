import { Inter, Bebas_Neue, Libre_Baskerville, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fontbebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400'
})

const fontroboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '400'
})

const fontlibre = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre',
  weight: '400'
})



export const metadata = {
  title: 'Dao Ho',
  description: 'Design Portfolio by Dao Ho',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fontbebas.variable} ${fontlibre.variable} ${fontroboto.variable}`}>{children}</body>
    </html>
    
  )
}
