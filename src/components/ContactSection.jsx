import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

const contacts = [
  { label: 'Email', href: 'mailto:sanchezsean09@gmail.com', text: 'sanchezsean09@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Seanton2', text: 'github.com/Seanton2' },
]

export default function ContactSection() {
  return (
    <section id="contact">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul>
        {contacts.map((c) => <ContactLink key={c.label} {...c} />)}
      </ul>
    </section>
  )
}