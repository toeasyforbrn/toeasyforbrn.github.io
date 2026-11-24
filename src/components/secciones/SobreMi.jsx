import Revelar from '../Revelar'
import Negritas from '../Negritas'
import { useIdioma } from '../../i18n/IdiomaContext'
import { TEXTOS } from '../../data/contenido'

export default function SobreMi() {
  const { t } = useIdioma()
  return (
    <section id="sobre-mi" className="seccion">
      <div className="container">
        <Revelar>
          <h2>{t(TEXTOS.quien.titulo)}</h2>
        </Revelar>
        <div className="row">
          <Revelar className="col-12 col-lg-8">
            <div className="panel panel-blur">
              {TEXTOS.quien.parrafos.map((p, i) => (
                <p key={i} className={i === TEXTOS.quien.parrafos.length - 1 ? 'mb-0' : ''}>
                  <Negritas texto={t(p)} />
                </p>
              ))}
            </div>
          </Revelar>
        </div>
      </div>
    </section>
  )
}
