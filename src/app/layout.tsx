import '@radix-ui/themes/styles.css'
import '@styles/globals.css'
import { Roboto } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import classNames from 'classnames'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

const metaTitle = 'OJ Abba'
const metaDescription =
  "I'm OJ, I build user-friendly web applications and solve complex problems using modern frameworks."
const metaURL = 'https://nugwxa.vercel.app/'
const metaImage = 'https://nugwxa.vercel.app/img/opengraph.jpg'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: metaURL,
    images: [
      {
        url: metaImage,
        width: 1200,
        height: 630,
        alt: metaTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    images: [metaImage],
  },
  alternates: {
    canonical: metaURL,
  },
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
      <GoogleAnalytics gaId={process.env.GoogleID ?? ''} />
    </html>
  )
}
