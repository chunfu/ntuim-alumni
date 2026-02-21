import SectionWrapper, { SectionHeader } from '../SectionWrapper'
import siteContent from '../../data/siteContent'

export default function Membership() {
  const { membership: m } = siteContent

  return (
    <SectionWrapper id="membership">
      <SectionHeader id="membership" title={m.sectionTitle} subtitle={m.sectionSubtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Eligibility */}
        <Card>
          <CardTitle icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          }>{m.eligibility.title}</CardTitle>
          <ul className="space-y-4" role="list">
            {m.eligibility.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-base text-text-secondary">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Benefits */}
        <Card>
          <CardTitle icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          }>{m.benefits.title}</CardTitle>
          <ul className="space-y-4" role="list">
            {m.benefits.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-base text-text-secondary">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Steps */}
        <Card className="lg:col-span-2 p-10">
          <CardTitle icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          }>{m.steps.title}</CardTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {m.steps.items.map((item, i) => (
              <div
                key={item.step}
                className="relative rounded-2xl p-6 text-center transition-all bg-surface-alt border border-border hover:border-primary-100 group"
              >
                {/* Connector line */}
                {i < m.steps.items.length - 1 && (
                  <div className="hidden lg:block absolute top-[28px] -right-3 w-6 h-px bg-border-strong z-0" />
                )}

                <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center font-bold text-lg bg-surface border border-border shadow-sm text-primary transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white relative z-10">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2 text-base text-text tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Contact */}
        <Card className="lg:col-span-2 bg-primary/5 border-primary/10 shadow-none">
          <CardTitle icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          }>{m.contact.title}</CardTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-base">
            <ContactItem
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              }
              label="Email"
            >
              <a
                href={`mailto:${m.contact.email}`}
                className="hover:text-primary transition-colors hover:underline underline-offset-4"
              >
                {m.contact.email}
              </a>
            </ContactItem>
            <ContactItem
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              }
              label="電話"
            >
              {m.contact.phone}
            </ContactItem>
            <ContactItem
              className="sm:col-span-2"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              }
              label="地址"
            >
              <address className="not-italic">
                {m.contact.address}
              </address>
            </ContactItem>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={`bg-surface p-8 border border-border rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  )
}

function CardTitle({ icon, children }) {
  return (
    <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 text-text tracking-tight">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </div>
      {children}
    </h3>
  )
}

function ContactItem({ icon, label, children, className = '' }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-primary">{icon}</span>
        <span className="font-bold text-text">
          {label}
        </span>
      </div>
      <div className="text-text-secondary pl-8">{children}</div>
    </div>
  )
}
