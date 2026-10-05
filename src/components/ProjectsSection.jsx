import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2025"
          title="LibReservation"
          description="A full-stack library management and reservation system built using PHP and SQL for backend logic with a responsive interface. It features dedicated administrative controls, asset management, and streamlined resource tracking."
          tech="PHP · SQL"
          link="https://github.com/Seanton2/LibraryReservation-System"
        />
        <ProjectCard
          year="2025"
          title="VocabQuest"
          description="An interactive, gamified vocabulary-building application featuring a high-fidelity UI/UX prototype designed in Figma and powered by a dynamic frontend-backend integration to make language learning engaging."
          tech="Figma · Frontend · Backend"
          link="https://github.com/Seanton2/vocabQuest"
        />
        <ProjectCard
          year="2026"
          title="JAVA GAME"
          description="A level by level based java game that is inspired by my CIT instructors and professors."
          tech="JAVA · SWING"
          link="https://github.com/Seanton2/JavaGame"
        />
        <ProjectCard
          year="2024"
          title="Karenderya Finder"
          description="A mobile app that helps you find karenderyas in your area."
          tech="REACT · JAVASCRIPT · SQL"
          link="https://github.com/Seanton2/KarenderyaFinder"
        />
      </div>
    </section>
  )
}