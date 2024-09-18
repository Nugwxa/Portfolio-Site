import '@radix-ui/themes/styles.css'
import '@styles/globals.css'
import { Theme } from '@radix-ui/themes'
import { Titillium_Web, League_Spartan } from 'next/font/google'
import classNames from 'classnames'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OJ Abba',
  description: 'Software Developer',
}

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-titillium',
})

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-league-spartan',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        data-theme="gray"
        className={classNames(leagueSpartan.variable, titillium.variable)}
      >
        <Theme
          className="themeWrapper"
          accentColor="gold"
          hasBackground={false}
        >
          {children}
        </Theme>
      </body>
    </html>
  )
}
