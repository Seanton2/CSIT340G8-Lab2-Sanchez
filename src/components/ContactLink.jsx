export default function ContactLink({ label, href, text }) {
  return <li>{label} <a href={href}>{text}</a></li>
}