import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <ClerkProvider>
      <html lang={locale ?? 'en'} className="h-full">
        <body className="h-full">
          <div className="overflow-x-auto">
            <div className="w-screen h-screen min-w-[300px]">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
                {children}
              </SignedIn>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default LocaleLayout
