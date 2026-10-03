import SectionHeading from './SectionHeading'
import Fact from './Fact'

export default function AboutSection() {
  return (
    <section id="about" className="">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="">I grew up in Cebu city but moved to Liloan.I picked IT because I wanted to build things that people can enjoy and also possibly help them too.My favorite part so far is exploring it might be a challenge but it is fun.</p>
      <dl className="">
        <Fact label="Course" value="YOUR COURSE" />
        <Fact label="Year level" value="YOUR YEAR LEVEL" />
        <Fact label="School" value="YOUR COLLEGE" />
        <Fact label="Based in" value="YOUR CITY" />
      </dl>
    </section>
  )
}