import { type pathnames } from '@/src/navigation'

type Route = {
  href: typeof pathnames | string
  label: string
  isExternal: boolean
}

export const routes: Route[] = [
  {
    href: '/pricing',
    label: 'Pricing',
    isExternal: false
  },

  // {
  //   href: '/programs',
  //   label: 'Programs',
  //   isExternal: false
  // },
  // {
  //   href: '/gallery',
  //   label: 'Gallery',
  //   isExternal: false
  // },
  {
    href: '/about',
    label: 'About',
    isExternal: false
  }
]
