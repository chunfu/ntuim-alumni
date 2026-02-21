import SectionWrapper, { SectionHeader } from '../SectionWrapper'
import siteContent from '../../data/siteContent'

const accentColors = [
  'bg-amber-500', 
  'bg-blue-500', 
  'bg-emerald-500', 
  'bg-rose-500', 
  'bg-violet-500', 
  'bg-cyan-500'
]

export default function Gallery() {
  const { gallery } = siteContent

  return (
    <SectionWrapper id="gallery" alternate>
      <SectionHeader
        id="gallery"
        title={gallery.sectionTitle}
        subtitle={gallery.sectionSubtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.items.map((item, i) => (
          <article
            key={i}
            className="group relative bg-surface rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface-alt relative">
              {item.src ? (
                <img 
                  src={item.src} 
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                  <div className={`absolute inset-0 opacity-10 ${accentColors[i % accentColors.length]}`} />
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted opacity-30">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                  </svg>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="p-6">
              <h3 className="font-bold text-lg tracking-tight text-text mb-2 transition-colors group-hover:text-primary">
                {item.caption}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
            
            {/* Subtle top border accent on hover instead of full overlay */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
