import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'
import Providers from './providers'
import ChatWidget from "./components/ChatWidget";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MK - Portfolio',
  description: 'Full Stack Developer Portfolio showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="min-h-screen pt-16">
            {children}
            <ChatWidget />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
