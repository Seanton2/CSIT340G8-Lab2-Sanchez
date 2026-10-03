import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

export default function ContactSection() {
  return (
    <section id="contact" className="">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="">
        <ContactLink label="Email" href="mailto:sanchezsean09@gmail.com" text="sanchezsean09@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/Seanton2" text="github.com/Seanton2" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/YOUR-PROFILE" text="linkedin.com/in/YOUR-PROFILE" />
      </ul>
    </section>
  )
}