import '@radix-ui/themes/styles.css'
import '@styles/globals.css'
import { Roboto } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import classNames from 'classnames'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OJ Abba | Software Developer',
  description: 'Software Developer',
}

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body data-theme="gray" className={classNames(robotoFont.variable)}>
        <Theme
          className="themeWrapper"
          accentColor="gray"
          appearance="dark"
          hasBackground={false}
        >
          {children}
        </Theme>
      </body>
    </html>
  )
}
