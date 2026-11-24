import Revelar from '../Revelar'
import { useIdioma } from '../../i18n/IdiomaContext'
import { PROYECTOS, TEXTOS } from '../../data/contenido'

const T = TEXTOS.proyectos

export default function Proyectos() {
  const { t } = useIdioma()
  return (
    <section id="proyectos" className="seccion">
      <div className="container">
        <Revelar>
          <h2>{t(T.titulo)}</h2>
          <p>{t(T.entrada)}</p>
        </Revelar>

        {/* Grid de Bootstrap: 1 columna en celular, 2 en tablet y computadora */}
        <div className="row g-3 mt-2">
          {PROYECTOS.map((p, i) => (
            <Revelar key={i} className="col-12 col-md-6" style={{ transitionDelay: `${(i % 2) * 0.12}s` }}>
              <article className="panel proyecto h-100">
                <small className="proyecto-tipo">{t(p.tipo)}</small>
                <h3>
                  {t(p.titulo)}
                  {p.estado && <span className="estado">{t(p.estado)}</span>}
                </h3>
                <p>{t(p.descripcion)}</p>
                <div className="etiquetas" aria-label={t(T.tecnologias)}>
                  {p.tecnologias.map((x, k) => (
                    <span key={k}>{t(x)}</span>
                  ))}
                </div>
                {p.enlace && (
                  <a href={p.enlace} className="ver-proyecto" target="_blank" rel="noreferrer">
                    {t(T.ver)}
                  </a>
                )}
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
