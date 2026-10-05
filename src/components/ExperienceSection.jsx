import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="Experience" subtitle="Where I have learned." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2023 – Present"
          title="Student"
          place="Cebu Institute of Technology"
          description="Continuous Studying and learning through hands-on projects and coursework."
        />
        <TimelineItem
          period="2022 – 2023"
          title="Student Developer"
          place="Personal Workspace"
          description="Built small web applications and practiced user centered design while improving my coding skills."
        />
        <TimelineItem
          period="2021 – 2022"
          title="Senior High School Student"
          place="STEM Strand"
          description="Started exploring the basics and fundamentals of development."
        />
      </ol>
    </section>
  )
}