import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { NavBar } from '../components/shareds/nav-bar'
import { LoaderProvider } from '@/contexts/loader'
import { AuthenticatedProvider } from '@/contexts/authenticated'
import ToasterWrap from '@/components/shareds/toaster-wrap'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Baloto-generator'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <AuthenticatedProvider>
          <LoaderProvider>
            <ToasterWrap />
            <NavBar />
            {children}
            <footer className='flex flex-row items-center justify-center pb-2 text-neutrals-black'>
              Made with ❤️ by Giba Dev
            </footer>
          </LoaderProvider>
        </AuthenticatedProvider>
      </body>
    </html>
  )
}
