import SectionHeading from './SectionHeading'
import SkillTag from './SkillTag'

const groups = {
  Languages: ['HTML', 'CSS', 'JavaScript', 'Java'],
  Frameworks: ['React', 'Tailwind CSS', 'Bootstrap'],
  Tools: ['Git', 'VS Code', 'MySQL', 'Figma'],
}

export default function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeading title="Skills" subtitle="What I work with." />
      {Object.entries(groups).map(([group, skills]) => (
        <div key={group}>
          <h3>{group}</h3>
          <p>{skills.map((s) => <SkillTag key={s} name={s} />)}</p>
        </div>
      ))}
    </section>
  )
}