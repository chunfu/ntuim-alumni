import SectionWrapper, { SectionHeader } from '../SectionWrapper'
import siteContent from '../../data/siteContent'

export default function Leadership() {
  const { leadership } = siteContent

  return (
    <SectionWrapper id="leadership" alternate>
      <SectionHeader
        id="leadership"
        title={leadership.sectionTitle}
        subtitle={leadership.sectionSubtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {leadership.members.map((member, i) => (
          <article
            key={i}
            className="bg-surface p-10 rounded-3xl border border-border shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            itemScope
            itemType="https://schema.org/Person"
          >
            {/* Role badge */}
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
              style={{
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-50)',
              }}
              itemProp="jobTitle"
            >
              {member.role}
            </div>

            {/* Photo */}
            <div className="w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden bg-surface-alt border-4 border-surface shadow-md transition-transform duration-500 group-hover:scale-105">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                  itemProp="image"
                  loading="lazy"
                />
              ) : (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted opacity-30">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-2 tracking-tight text-text" itemProp="name">
              {member.name}
            </h3>
            
            <p className="text-base text-text-muted mb-6 font-medium">
              {member.graduation} <span className="mx-2 text-border-strong">|</span> <span itemProp="worksFor">{member.company}</span>
            </p>

            {/* Contact details */}
            <div className="pt-6 border-t border-border space-y-3">
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center gap-3 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
                itemProp="email"
              >
                <div className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center text-text-muted group-hover:text-primary group-hover:bg-primary-50 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                {member.email}
              </a>
              
              <div className="flex items-center justify-center gap-3 text-sm font-medium text-text-secondary">
                <div className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center text-text-muted transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span itemProp="telephone">{member.phone}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
