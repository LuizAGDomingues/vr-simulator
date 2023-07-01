import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet='UTF-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Player de VR</title>
      </head>
      <body className={inter.className}>
        {children}
        scr
      </body>
    </html>
  )
}
