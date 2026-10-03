import SectionHeading from './SectionHeading'
import Fact from './Fact'

export default function AboutSection() {
  return (
    <section id="about">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p>I grew up in Cebu city but moved to Liloan.I picked IT because I wanted to build things that people can enjoy and also possibly help them too.My favorite part so far is exploring it might be a challenge but it is fun.</p>
      <dl>
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third Year" />
        <Fact label="School" value="Cebu Institute of Technology University" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  )
}