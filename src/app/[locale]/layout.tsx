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
import Script from 'next/script'

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
  title: 'College Mentorship | Real College Help. From Students, For Students',
  description:
    'Discover top-tier college mentorship and personalized guidance on college admissions, brought to you by real students. Get insider tips to gain admission to your dream college.',
  keywords:
    'college mentorship, college counseling, college admissions, student mentorship, college guidance',
  alternates: {
    canonical: 'https://stu4stu.org/',
    languages: {
      en: 'https://stu4stu.org/en'
      // Add other languages here if applicable.
    }
  },
  openGraph: {
    title:
      'College Mentorship | Real College Help. From Students, For Students',
    description:
      'Join our college mentorship program for personalized guidance and insider tips on the college admissions process. Trusted advice by current college students.',
    url: 'https://stu4stu.org/',
    siteName: 'Students 4 Students',
    images: [
      {
        url: 'https://stu4stu.org/s4s-trans.png',
        width: 800,
        height: 600,
        alt: 'Students 4 Students Logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'College Mentorship | Real College Help. From Students, For Students',
    description:
      'Get personal college mentorship—from real students. Our expert college admissions guidance makes your dream college within reach.',
    images: ['https://stu4stu.org/s4s-trans.png']
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    // If a message file for the locale is not found, fallback to English
    messages = (await import(`../../../messages/en.json`)).default
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
      <meta name="google-site-verification" content="Kyq6mLWPWAdtLSuILhIQHjbL2XvlQbrCSuia6hlS8UU" />
      <link rel='icon' href='/favicon.ico' />
      <meta content='https://stu4stu.org/en' property='og:url' />
      <meta content='https://embed.com/embedimage.png' property='og:image' />
      <meta content='#43B581' data-react-helmet='true' name='theme-color' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <html
        lang={locale}
        dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
        className={`${space_grotesk.variable} ${rubik.variable} scroll-smooth`}
        suppressHydrationWarning
      >
        <head>
          <Script
            id='structured-data'
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Students 4 Students',
                url: 'https://stu4stu.org/',
                logo: 'https://stu4stu.org/s4s-trans.png',
                sameAs: [
                  'https://www.instagram.com/students.4students/',
                  'https://linktr.ee/stu4stu',
                  'https://www.tiktok.com/@students.4students'
                ]
              })
            }}
          />
          <Script
            id='breadcrumb'
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://stu4stu.org/'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Pricing',
                    item: 'https://stu4stu.org/pricing'
                  }
                ]
              })
            }}
          />
        </head>
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
