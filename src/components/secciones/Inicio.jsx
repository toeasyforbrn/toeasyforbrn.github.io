import Revelar from '../Revelar'
import { useIdioma } from '../../i18n/IdiomaContext'
import { TEXTOS } from '../../data/contenido'

export default function Inicio() {
  const { t } = useIdioma()
  return (
    <section id="inicio" className="seccion">
      <div className="container">
        <Revelar className="col-lg-9">
          <h1 className="titulo-principal">{t(TEXTOS.inicio.titulo)}</h1>
          <p className="entrada">{t(TEXTOS.inicio.entrada)}</p>
        </Revelar>
      </div>
    </section>
  )
}
