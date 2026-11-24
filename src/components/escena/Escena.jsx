import Estrellas from './Estrellas'
import Constelaciones from './Constelaciones'
import Nubes from './Nubes'
import Aves from './Aves'
import Paisaje from './Paisaje'

// Fondo fijo detrás de todo el contenido. El orden importa: lo de abajo queda encima.
export default function Escena() {
  return (
    <div className="escena" aria-hidden="true">
      <Estrellas />
      <Constelaciones />
      <div className="luna" />
      <div className="sol" />
      <Nubes />
      <Aves />
      <Paisaje />
    </div>
  )
}
