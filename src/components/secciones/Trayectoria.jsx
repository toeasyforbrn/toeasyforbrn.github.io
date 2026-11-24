import Revelar from '../Revelar'
import { useIdioma } from '../../i18n/IdiomaContext'
import { FORMACION, EXPERIENCIA, CERTIFICACIONES, TEXTOS } from '../../data/contenido'

function Lista({ items }) {
  const { t } = useIdioma()
  return (
    <ul className="lista-trayectoria">
      {items.map((it) => (
        <li key={t(it.titulo)}>
          <strong>{t(it.titulo)}</strong>
          {it.lugar && <span>{t(it.lugar)}</span>}
          {it.fecha && <small>{t(it.fecha)}</small>}
          {it.detalle && <p>{t(it.detalle)}</p>}
          {it.enlace && (
            <a className="verificar" href={it.enlace} target="_blank" rel="noreferrer">
              {t(TEXTOS.trayectoria.verificar)}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

const T = TEXTOS.trayectoria
const COLUMNAS = [
  { titulo: T.formacion, items: FORMACION },
  { titulo: T.experiencia, items: EXPERIENCIA },
  { titulo: T.certificaciones, items: CERTIFICACIONES },
]

export default function Trayectoria() {
  const { t } = useIdioma()
  return (
    <section id="trayectoria" className="seccion">
      <div className="container">
        <Revelar>
          <h2>{t(T.titulo)}</h2>
          <p>{t(T.entrada)}</p>
        </Revelar>
        {/* 1 columna en celular, 3 en computadora */}
        <div className="row g-3 mt-2">
          {COLUMNAS.map((c, i) => (
            <Revelar key={c.titulo.es} className="col-12 col-lg-4" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="panel h-100">
                <h3 className="panel-titulo">{t(c.titulo)}</h3>
                <Lista items={c.items} />
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
