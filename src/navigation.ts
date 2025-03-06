'use client'
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'

export const localePrefix = 'as-needed'

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/gallery': '/gallery',
  '/programs': '/programs',
  '/pricing': '/pricing'
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
