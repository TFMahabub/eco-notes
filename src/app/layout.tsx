'use client'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '../../ReduxStore/store'
import Footer from '../../components/shared/footer/Footer'
import Navbar from '../../components/shared/navbar/Navbar'
import './globals.css'

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class'>
          <Provider store={store}>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
