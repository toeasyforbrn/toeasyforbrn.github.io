import Revelar from '../Revelar'
import { useIdioma } from '../../i18n/IdiomaContext'
import { TEXTOS } from '../../data/contenido'

// El correo y las redes están en los íconos del pie de página.
export default function Contacto() {
  const { t } = useIdioma()
  return (
    <section id="contacto" className="seccion">
      <div className="container">
        <Revelar className="col-lg-8">
          <h2>{t(TEXTOS.contacto.titulo)}</h2>
          <p>{t(TEXTOS.contacto.entrada)}</p>
        </Revelar>
      </div>
    </section>
  )
}
