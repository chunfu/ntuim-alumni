import siteContent from '../data/siteContent'

export default function Footer() {
  const { footer, nav, siteName, siteDescription } = siteContent

  return (
    <footer
      role="contentinfo"
      className="bg-surface border-t border-border pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 pr-0 md:pr-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-sm shadow-sm">
                IM
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text">
                {siteName}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-text-muted max-w-sm">
              {siteDescription}
            </p>
          </div>

          {/* Quick Nav */}
          <nav aria-label="頁尾導航">
            <h4 className="text-sm font-bold uppercase tracking-widest text-text mb-6">
              快速連結
            </h4>
            <ul className="space-y-4">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* External Links */}
          <nav aria-label="相關連結">
            <h4 className="text-sm font-bold uppercase tracking-widest text-text mb-6">
              相關連結
            </h4>
            <ul className="space-y-4">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-text-muted hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span>Designed with</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-primary">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>by NTU IM Alumni</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
