export default function TimelineItem({ period, title, place, description }) {
  return (
    <li>
      <p>{period}</p>
      <h3>{title}</h3>
      <p>{place}</p>
      <p>{description}</p>
    </li>
  )
}