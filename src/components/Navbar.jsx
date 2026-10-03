import NavLink from './NavLink'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  return (
    <nav>
      <a href="/">Sean Anthony P. Sanchez</a>
      {links.map((l) => <NavLink key={l} href={`#${l.toLowerCase()}`} label={l} />)}
    </nav>
  )
}