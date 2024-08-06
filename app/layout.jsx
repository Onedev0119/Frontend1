import "./globals.css"
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Header from '@/src/components/Header/header'
import Head from "next/head"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html >
      <body style={{margin:0}}>
        <Header></Header>
          <div className="container" >
            {children}
            <Toaster />
          </div>
      </body>
    </html>
  )
}
