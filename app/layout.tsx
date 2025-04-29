import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-urbanist',
});



export const metadata: Metadata = {
  title: 'HT-Architecte | Modern Architecture',
  description: 'Creating innovative, sustainable architectural designs for modern living and working spaces',
  keywords: 'architecture, design, modern buildings, sustainable architecture, innovative spaces',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}