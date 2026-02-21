import { useEffect, useRef, useState } from 'react'

export function SectionHeader({ id, title, subtitle, align = 'center' }) {
  return (
    <div className={`mb-16 md:mb-20 text-${align}`}>
      {subtitle && (
        <span 
          className="inline-block px-3 py-1 mb-4 rounded-full text-sm font-semibold tracking-widest text-primary uppercase bg-primary-50 border border-primary-100"
        >
          {subtitle}
        </span>
      )}
      <h2 
        id={`${id}-title`}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text"
      >
        {title}
      </h2>
    </div>
  )
}

export default function SectionWrapper({ 
  id, 
  children, 
  className = '', 
  alternate = false,
  containerClass = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 md:py-32 ${className}`}
      style={{
        backgroundColor: alternate ? 'var(--color-surface-alt)' : 'var(--color-bg)',
      }}
      aria-labelledby={`${id}-title`}
    >
      <div 
        className={containerClass}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {children}
      </div>
    </section>
  )
}
