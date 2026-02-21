import SectionWrapper, { SectionHeader } from '../SectionWrapper'
import siteContent from '../../data/siteContent'

export default function Milestones() {
  const { milestones } = siteContent

  return (
    <SectionWrapper id="milestones">
      <SectionHeader
        id="milestones"
        title={milestones.sectionTitle}
        subtitle={milestones.sectionSubtitle}
      />

      <div className="relative max-w-4xl mx-auto py-10">
        {/* Center subtle line */}
        <div className="absolute left-[28px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border-strong" />

        <ol className="space-y-12 list-none m-0 p-0">
          {milestones.items.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <li key={i} className="relative">
                {/* Year Badge acting as the timeline dot */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 w-auto h-auto mt-1 md:mt-2">
                  <div className="px-4 py-1.5 rounded-full bg-surface border border-border shadow-sm text-sm font-bold text-primary">
                    <time dateTime={item.year}>{item.year}</time>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 ${
                    isLeft
                      ? 'md:mr-[calc(50%+3.5rem)] md:pr-0'
                      : 'md:ml-[calc(50%+3.5rem)] md:pl-0'
                  }`}
                >
                  <article className="bg-surface p-8 rounded-2xl border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-3 tracking-tight text-text">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </article>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </SectionWrapper>
  )
}
