import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

export default function ExperienceSection() {
  return (
    <section id="experience" className="">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="">
        <TimelineItem period="YEAR – Present" title="YOUR COURSE"
          place="YOUR COLLEGE"
          description="One sentence about what you are studying." />
        <TimelineItem period="YEAR" title="YOUR EXPERIENCE (or a school activity)"
          place="WHERE"
          description="One sentence about what you did." />
        <TimelineItem period="YEAR – YEAR" title="Senior High School, STEM Strand"
          place="ACLC College of Mandaue"
          description="One sentence about what you learned there." />
      </ol>
    </section>
  )
}