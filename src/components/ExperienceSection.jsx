import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

const items = [
  { period: '2023– present', title: 'BS Information Technology', place: 'Cebu Institute of Technology University', description: 'Continuous exploring and learning through hands-on projects and coursework.' },
  { period: '2022– 2023', title: 'Student Developer', place: 'personal workspace', description: 'Individual projects and built small web applications and practiced user-centered design while improving my coding skills.' },
  { period: '2019– 2021', title: 'Senior High School, STEM Strand', place: 'ACLC College of Mandaue', description: 'One sentence about what you learned there.' },
]

export default function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol>
        {items.map((i) => <TimelineItem key={i.title} {...i} />)}
      </ol>
    </section>
  )
}