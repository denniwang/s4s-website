import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider'
import type { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { Inter, Rubik, Space_Grotesk } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Header } from './components/Header'
import './globals.css'
import { PopupWidget } from 'react-calendly'
import { Footer } from './components/Footer'
import 'aos/dist/aos.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter'
})
const rubik = Rubik({
  subsets: ['arabic'],
  variable: '--rubik'
})
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})
export const metadata: Metadata = {
  title: 'Students 4 Students',
  description: 'Real college help. From students, for students.'
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    // If a message file for the locale is not found, fallback to English
    messages = (await import(`../../../messages/en.json`)).default;
  }

  return (
    <>
      <title>Students 4 Students</title>
      <meta
        content='Students 4 Students - College help for students, by students.'
        property='og:title'
      />
      <meta
        content='Getting ready to apply to college or need help wrapping up your essays? Get real college help. By students, for students.'
        property='og:description'
      />
      <link rel='icon' href='/favicon.ico' />
      <meta content='https://stu4stu.org/en' property='og:url' />
      <meta content='https://embed.com/embedimage.png' property='og:image' />
      <meta content='#43B581' data-react-helmet='true' name='theme-color' />
      <html
        lang={locale}
        dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
        className={`${space_grotesk.variable} ${rubik.variable} scroll-smooth`}
        suppressHydrationWarning
      >
        <body className='layout-body'>
          <ThemeProvider
            enableSystem
            attribute='class'
            defaultTheme='light'
            themes={['light', 'dark']}
          >
            <NextIntlClientProvider messages={messages} locale={locale}>
              <NextTopLoader
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                easing='ease'
                speed={200}
                shadow='0 0 10px #2299DD,0 0 5px #2299DD'
                color='var(--primary)'
                showSpinner={false}
              />
              <Header locale={locale} />
              <main className='mx-auto '>{children}</main>
              <Footer />
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
