import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
  title: 'webBase',
  description: 'Industry standard website for small businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${roboto.className} dark:bg-gray-900`}>
          <ConfigProvider>
          <main>
              <Navbar/>
              {children}
          </main>
          </ConfigProvider>
        </body>
    </html>
  )
}
