import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const gh = 'https://github.com/Seanton2'
const projects = [
  { year: '2026', title: 'LibReservation', description: 'A full-stack library management and reservation system built using PHP and SQL for backend logic with a responsive interface It features dedicated administrative controls, asset management, and streamlined resource tracking.', tech: "PHP · SQL.", link: 'https://github.com/Seanton2/LibraryReservation-System' },
  { year: '2026', title: 'JAVA GAME', description: 'A level by level based java game that is inspired by my CIT instructors and professors.', tech: 'JAVA · SWING', link: 'https://github.com/Seanton2/JavaGame' },
  { year: '2026', title: 'VocabQuest', description: 'An interactive, gamified vocabulary-building application featuring a high-fidelity UI/UX prototype designed in Figma and powered by a dynamic frontend-backend integration to make language learning engaging.', tech: 'Figma · Frontend · Backend', link: 'https://github.com/Seanton2/vocabQuest' },
  { year: '2026', title: 'Karenderya Finder', description: 'A mobile app that helps you find karenderyas in your area.', tech: 'REACT · JAVASCRIPT · SQL', link: 'https://github.com/Seanton2/KarenderyaFinder' },
]

export default function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
    </section>
  )
}
 