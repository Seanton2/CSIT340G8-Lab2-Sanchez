import SectionHeading from './SectionHeading'
import SkillTag from './SkillTag'

export default function SkillsSection() {
  return (
    <section id="skills" className="">
      <SectionHeading title="Skills" subtitle="What I work with." />

      <h3 className="">Languages</h3>
      <div className="">
        <SkillTag name="HTML" />
        <SkillTag name="CSS" />
        <SkillTag name="JavaScript" />
        <SkillTag name="Java" />
      </div>

      <h3 className="">Frameworks</h3>
      <div className="">
        <SkillTag name="React" />
        <SkillTag name="Tailwind CSS" />
        <SkillTag name="Bootstrap" />
      </div>

      <h3 className="">Tools</h3>
      <div className="">
        <SkillTag name="Git" />
        <SkillTag name="VS Code" />
        <SkillTag name="MySQL" />
        <SkillTag name="Figma" />
      </div>
    </section>
  )
}