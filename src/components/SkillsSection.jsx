import SectionHeading from './SectionHeading'
import SkillTag from './SkillTag'

export default function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeading title="Skills" subtitle="What I work with." />

      <div>
        <div>
          <h3>Languages</h3>
          <SkillTag name="HTML" />
          <SkillTag name="CSS" />
          <SkillTag name="JavaScript" />
          <SkillTag name="PHP" />
        </div>

        <div>
          <h3>Frameworks</h3>
          <SkillTag name="React" />
          <SkillTag name="Tailwind CSS" />
          <SkillTag name="Bootstrap" />
        </div>

        <div>
          <h3>Tools</h3>
          <SkillTag name="Git" />
          <SkillTag name="VS Code" />
          <SkillTag name="MySQL" />
          <SkillTag name="Figma" />
        </div>
      </div>
    </section>
  )
}