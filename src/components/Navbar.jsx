import NavLink from './NavLink'

export default function Navbar() {
  return (
    <nav>
      <a href="#top">Sean Anthony P. Sanchez</a>

      <NavLink href="#about" label="About" />
      <NavLink href="#skills" label="Skills" />
      <NavLink href="#projects" label="Projects" />
      <NavLink href="#experience" label="Experience" />
      <NavLink href="#contact" label="Contact" />
    </nav>
  )
}