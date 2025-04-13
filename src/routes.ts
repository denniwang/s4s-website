type Route = {
  href: string
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
  {
    href: '/student-success',
    label: 'Student Success',
    isExternal: false
  },
  {
    href: '/about',
    label: 'About',
    isExternal: false
  }
]
