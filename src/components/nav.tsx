'use client'

import { ReactElement } from "react"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { usePathname } from "@/i18n/navigation"

export default function NavBar(): ReactElement {
  const t = useTranslations('Navigation')
  const pathname = usePathname()

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">

          <button tabIndex={0} className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>

          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link href="/">{t('home')}</Link></li>
            <li><Link href="/portfolio">{t('portfolio')}</Link></li>
            <li><Link href="/cv">{t('cv')}</Link></li>
            <li><Link href="/music">{t('music')}</Link></li>
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-l">MIKKO RAJAKORPI</Link>
      </div>

      <div className="navbar-center hidden md:join">
        <div role="tablist" className="tabs tabs-box">
          <Link href="/" role="tab" className={pathname === '/' ? 'tab tab-active' : 'tab'}>{t('home')}</Link>
          <Link href="/portfolio" role="tab" className={pathname === '/portfolio' ? 'tab tab-active' : 'tab'}>{t('portfolio')}</Link>
          <Link href="/cv" role="tab" className={pathname === '/cv' ? 'tab tab-active' : 'tab'}>{t('cv')}</Link>
          <Link href="/music" role="tab" className={pathname === '/music' ? 'tab tab-active' : 'tab'}>{t('music')}</Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="dropdown">
          <button tabIndex={0} className="btn">{t('change_language')}</button>

          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link href={`${pathname}`} locale="en">English</Link></li>
            <li><Link href={`${pathname}`} locale="fi">Suomi</Link></li>
            <li><Link href={`${pathname}`} locale="de">Deutsch</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
