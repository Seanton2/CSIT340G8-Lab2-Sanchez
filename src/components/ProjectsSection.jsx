import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="">
        <ProjectCard year="2026" title="LibReservation"
          description="A full-stack library management and reservation system built using PHP and SQL for backend logic with a responsive interface. It features dedicated administrative controls, asset management, and streamlined resource tracking."
          tech="PHP · SQL"
          link="https://github.com/Seanton2/LibraryReservation-System" />
        <ProjectCard year="YEAR" title="JAVA GAME"
          description="A level by level based java game that is inspired by my CIT instructors and professors."
          tech="JAVA · SWING" link="https://github.com/Seanton2/JavaGame" />
        <ProjectCard year="YEAR" title="VocabQuest"
          description="An interactive, gamified vocabulary-building application featuring a high-fidelity UI/UX prototype designed in Figma and powered by a dynamic frontend-backend integration to make language learning engaging."
          tech="Figma · Frontend · Backend" link="https://github.com/Seanton2/vocabQuest" />
        <ProjectCard year="YEAR" title="Karenderya Finder"
          description="A mobile app that helps you find karenderyas in your area. It features a user-friendly interface, real-time location tracking, and a comprehensive database of local eateries."
          tech="REACT · JAVASCRIPT · SQL" link="https://github.com/Seanton2/KarenderyaFinder" />
      </div>
    </section>
  )
}