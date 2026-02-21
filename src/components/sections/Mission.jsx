import SectionWrapper, { SectionHeader } from '../SectionWrapper'
import siteContent from '../../data/siteContent'

const icons = {
  '🤝': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
    </svg>
  ),
  '🌐': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  '🎓': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
    </svg>
  ),
  '🚀': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
}

export default function Mission() {
  const { mission } = siteContent

  return (
    <SectionWrapper id="mission" alternate>
      <SectionHeader id="mission" title={mission.sectionTitle} subtitle={mission.sectionSubtitle} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mission.items.map((item, i) => (
          <article
            key={i}
            className="bg-surface p-8 rounded-2xl border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              {icons[item.icon] || <span className="text-2xl">{item.icon}</span>}
            </div>

            <h3 className="text-xl font-bold mb-3 tracking-tight text-text">
              {item.title}
            </h3>
            
            <p className="text-base leading-relaxed text-text-secondary">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
