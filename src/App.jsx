import { useEscenaScroll } from './hooks/useEscenaScroll'
import { useIdioma } from './i18n/IdiomaContext'
import { TEXTOS } from './data/contenido'
import Escena from './components/escena/Escena'
import Navegacion from './components/Navegacion'
import Inicio from './components/secciones/Inicio'
import SobreMi from './components/secciones/SobreMi'
import Trayectoria from './components/secciones/Trayectoria'
import Proyectos from './components/secciones/Proyectos'
import Contacto from './components/secciones/Contacto'
import Redes from './components/Redes'
import CursorLuz from './components/CursorLuz'

export default function App() {
  // Lee el scroll y actualiza las variables CSS de la escena (día → noche)
  useEscenaScroll()
  const { t } = useIdioma()

  return (
    <>
      <Escena />
      <CursorLuz />
      <Navegacion />
      <main className="contenido">
        <Inicio />
        <SobreMi />
        <Trayectoria />
        <Proyectos />
        <Contacto />
      </main>
      <footer className="pie">
        <Redes />
        <p>{t(TEXTOS.pie)}</p>
      </footer>
    </>
  )
}
