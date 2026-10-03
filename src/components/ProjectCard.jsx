export default function ProjectCard({ year, title, description, tech, link }) {
  return (
    <article>
      <p>{year}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{tech}</p>
      <p><a href={link}>View on GitHub</a></p>
    </article>
  )
}