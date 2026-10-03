export default function TimelineItem({ period, title, place, description }) {
  return (
    <li className="">
      <p className="">{period}</p>
      <h3 className="">{title}</h3>
      <p className="">{place}</p>
      <p className="">{description}</p>
    </li>
  )
}