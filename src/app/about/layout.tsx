import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Students 4 Students',
  description:
    'Learn about our team of college mentors who provide personalized guidance on college admissions.',
  alternates: {
    canonical: 'https://stu4stu.org/about'
  }
}

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
