import { useState, useEffect } from 'react'

export default function ThemeToggle({ scrolled = true }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: scrolled
          ? dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
          : 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
      }}
      aria-label={dark ? '切換為淺色模式' : '切換為深色模式'}
      title={dark ? '切換為淺色模式' : '切換為深色模式'}
    >
      <span className="text-lg transition-transform duration-300" style={{
        transform: dark ? 'rotate(0deg)' : 'rotate(180deg)',
      }}>
        {dark ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fbbf24' }}>
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: scrolled ? 'var(--color-text-muted)' : '#e2e8f0' }}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </span>
    </button>
  )
}
