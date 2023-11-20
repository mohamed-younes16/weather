import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/modetoggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather app',
  description: 'weather app createed by nextJS ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
 
     <html lang="en" >
        <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  ><body className={`${inter.className}   relative  overflow-x-hidden bg-gradient-to-br min-h-screen  
  from-[#394f68] to-[#183B7e] dark:to-black`}> 
     <div className="absolute  z-50 top-5 right-5">
          <ModeToggle />
        </div> 
        {children}</body>
  </ThemeProvider>
       
        
       
    </html>

   
  )
}
