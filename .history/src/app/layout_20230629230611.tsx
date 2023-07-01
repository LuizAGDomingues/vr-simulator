import { NextScript } from 'next/document'
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
        <NextScript>
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </NextScript>
      </body>
    </html>
  )
}
