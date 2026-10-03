export default function ProjectCard({ year, title, description, tech, link }) {
  return (
    <article className="">
      <p className="">{year}</p>
      <h3 className="">{title}</h3>
      <p className="">{description}</p>
      <p className="">{tech}</p>
      <a href={link} className="">View on GitHub</a>
    </article>
  )
}