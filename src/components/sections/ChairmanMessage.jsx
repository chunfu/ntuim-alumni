import SectionWrapper, { SectionHeader } from '../SectionWrapper'
import siteContent from '../../data/siteContent'

export default function ChairmanMessage() {
  const { chairmanMessage: cm } = siteContent

  return (
    <SectionWrapper id="chairman">
      <SectionHeader id="chairman" title={cm.sectionTitle} />

      <div className="max-w-5xl mx-auto">
        <article
          className="bg-surface rounded-3xl border border-border shadow-sm p-8 md:p-14 relative overflow-hidden"
          itemScope
          itemType="https://schema.org/Person"
        >
          {/* Decorative giant quote mark in the background */}
          <div className="absolute top-4 left-6 text-[10rem] font-serif leading-none text-surface-alt select-none pointer-events-none z-0">
            &ldquo;
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start relative z-10">
            {/* Photo + info side */}
            <div className="flex-shrink-0 mx-auto md:mx-0 text-center md:text-left w-full md:w-56">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl mx-auto md:mx-0 mb-6 flex items-center justify-center overflow-hidden bg-surface-alt border border-border shadow-sm">
                {cm.photo ? (
                  <img
                    src={cm.photo}
                    alt={`${cm.name} - ${cm.title}`}
                    className="w-full h-full object-cover"
                    itemProp="image"
                    loading="lazy"
                  />
                ) : (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted opacity-40">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                )}
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-text tracking-tight" itemProp="name">
                  {cm.name}
                </h3>
                <div className="text-lg font-medium text-primary" itemProp="jobTitle">
                  {cm.title}
                </div>
                <div className="text-base text-text-muted pt-2 divide-x divide-border">
                  <span className="pr-3">{cm.graduation}</span>
                  <span className="pl-3">{siteContent.siteName}</span>
                </div>
              </div>
            </div>

            {/* Message side */}
            <div className="flex-1 space-y-6 md:pt-4">
              {cm.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-lg leading-loose text-text-secondary"
                >
                  {p}
                </p>
              ))}
              <div className="pt-8 flex flex-col items-end">
                <div className="w-24 h-px bg-border mb-4" />
                <p className="font-bold text-xl text-text tracking-widest" style={{ fontFamily: '"Noto Sans TC", serif' }}>
                  {cm.signature}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </SectionWrapper>
  )
}
