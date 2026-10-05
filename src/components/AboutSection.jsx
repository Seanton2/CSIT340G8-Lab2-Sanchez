import Fact from './Fact'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
       I grew up in Cebu city but moved to Liloan.I picked IT because I wanted to build things that people can enjoy and also possibly help them too.My favorite part so far is exploring it might be a challenge but it is fun.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="Cebu Institute of Technology – University" />
        <Fact label="Based in" value="Liloan City" />
      </dl>
    </section>
  )
}