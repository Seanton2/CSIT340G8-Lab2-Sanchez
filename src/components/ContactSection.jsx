import ContactLink from './ContactLink'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:seananthony.sanchez@cit.edu"
          text="seananthony.sanchez@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/Seanton2"
          text="github.com/Seanton2"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/seananthony-sanchez"
          text="linkedin.com/in/seananthony-sanchez"
        />
      </ul>
    </section>
  )
}