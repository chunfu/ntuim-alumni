import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import siteContent from '../data/siteContent'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'var(--color-surface-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          padding: scrolled ? '0.75rem 0' : '1.25rem 0'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label={siteContent.siteName}
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-sm shadow-md transition-transform group-hover:scale-105">
              IM
            </div>
            <span 
              className="text-lg font-bold tracking-tight text-text transition-colors group-hover:text-primary"
            >
              {siteContent.siteName}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-8">
              {siteContent.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="w-px h-6 bg-border"></div>
            <ThemeToggle />
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              className="w-10 h-10 rounded-lg flex items-center justify-center text-text-secondary hover:bg-surface-alt transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen 
                  ? <path d="M18 6L6 18M6 6l12 12" />
                  : <path d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-surface/95 backdrop-blur-sm transition-all duration-300 md:hidden flex flex-col items-center justify-center ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {siteContent.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-2xl font-bold text-text hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
