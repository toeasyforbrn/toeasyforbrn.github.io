import correo from 'bootstrap-icons/icons/envelope-fill.svg?raw'
import linkedin from 'bootstrap-icons/icons/linkedin.svg?raw'
import discord from 'bootstrap-icons/icons/discord.svg?raw'
import github from 'bootstrap-icons/icons/github.svg?raw'
import { CONTACTO } from '../data/contenido'

// Íconos de Bootstrap Icons (licencia MIT), cargados como SVG para que tomen el color del texto
const REDES = [
  { nombre: 'Correo', href: `mailto:${CONTACTO.correo}`, icono: correo },
  { nombre: 'LinkedIn', href: CONTACTO.linkedin, icono: linkedin },
  { nombre: 'Discord', href: CONTACTO.discord, icono: discord },
  { nombre: 'GitHub', href: CONTACTO.github, icono: github },
]

export default function Redes() {
  return (
    <ul className="redes">
      {REDES.map((r) => (
        <li key={r.nombre}>
          <a
            className={`red-${r.nombre.toLowerCase()}`}
            href={r.href}
            aria-label={r.nombre}
            title={r.nombre}
            {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: r.icono }} />
          </a>
        </li>
      ))}
    </ul>
  )
}
