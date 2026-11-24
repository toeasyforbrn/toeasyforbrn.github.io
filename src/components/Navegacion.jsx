import { useState } from 'react'
import { useIdioma } from '../i18n/IdiomaContext'
import { TEXTOS } from '../data/contenido'

const M = TEXTOS.menu
const ENLACES = [
  { href: '#sobre-mi', texto: M.quien },
  { href: '#trayectoria', texto: M.trayectoria },
  { href: '#proyectos', texto: M.proyectos },
  { href: '#contacto', texto: M.contacto },
]

// Navbar de Bootstrap. En celular se colapsa en un botón de menú.
export default function Navegacion() {
  const [abierto, setAbierto] = useState(false)
  const { idioma, cambiar, t } = useIdioma()

  return (
    <nav className="navbar navbar-expand-md fixed-top navegacion" aria-label="Principal">
      <div className="container-fluid px-3 px-md-5">
        <a className="navbar-brand marca" href="#inicio" aria-label="Bryan González">
          {/* La "o" de González es una nubecita */}
          <span aria-hidden="true">
            Bryan G
            <svg className="nube-o" viewBox="0 0 26 18">
              <path d="M6 17a5 5 0 0 1-.6-10 6.5 6.5 0 0 1 12.2-1.6A5.3 5.3 0 0 1 20.5 17Z" />
            </svg>
            nzález
          </span>
        </a>
        <div className="d-flex align-items-center gap-2 order-md-last ms-md-3">
          {/* Botón de idioma: siempre visible, también en celular */}
          <button type="button" className="boton-idioma" onClick={cambiar} aria-label={t(M.traducir)} title={t(M.traducir)}>
            <span className={idioma === 'es' ? 'activo' : ''}>ES</span>
            <span className={idioma === 'en' ? 'activo' : ''}>EN</span>
          </button>
          <button
            className="navbar-toggler boton-menu"
            type="button"
            aria-controls="menu-principal"
            aria-expanded={abierto}
            aria-label={abierto ? t(M.cerrar) : t(M.abrir)}
            onClick={() => setAbierto(!abierto)}
          >
            <span className="icono-menu" />
          </button>
        </div>
        <div className={`collapse navbar-collapse justify-content-end ${abierto ? 'show' : ''}`} id="menu-principal">
          <ul className="navbar-nav gap-md-3">
            {ENLACES.map((e) => (
              <li className="nav-item" key={e.href}>
                <a className="nav-link" href={e.href} onClick={() => setAbierto(false)}>
                  {t(e.texto)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
