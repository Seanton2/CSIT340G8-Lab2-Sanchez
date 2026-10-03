export default function ContactLink({ label, href, text }) {
  return (
    <li className="">
      {label} <a href={href} className="">{text}</a>
    </li>
  )
}