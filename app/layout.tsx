
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/Hooks/useAuth'
import RecoidContextProvider from './recoilService'
import {ModalProvider} from '@/Hooks/useModal'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
      <AuthProvider>
        
          <html lang="en">
            <body className={inter.className}>
              <RecoidContextProvider>
                {
                  children
                }
              
              </RecoidContextProvider>
               
            </body>
          </html>
        
        
      </AuthProvider>
   
   
      
   

  )
}
