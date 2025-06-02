import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Students 4 Students',
  description: 'View our college mentorship program pricing and packages.',
  alternates: {
    canonical: 'https://stu4stu.org/pricing'
  }
}

export default function PricingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
