import siteContent from '../../data/siteContent'

export default function Hero() {
  const { hero } = siteContent

  return (
    <section
      id="hero"
      className="relative min-h-screen flex text-center flex-col items-center justify-center overflow-hidden pt-20"
      aria-label="首頁橫幅"
    >
      <div className="absolute inset-0 bg-bg" />

      {/* Decorative ultra-subtle blurred shapes */}
      <div 
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-[100px] pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-[100px] pointer-events-none"
        style={{ transform: 'translate(50%, 50%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-primary bg-primary-50 border border-primary-100 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {siteContent.siteDescription}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-text mb-8 leading-[1.15] tracking-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {hero.title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-text-secondary font-medium mb-6 tracking-wide animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {hero.subtitle}
          </p>
          
          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {hero.description}
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <a
              href={hero.cta.href}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-primary shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              {hero.cta.text}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          {hero.stats.map((stat, i) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-surface border border-border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
