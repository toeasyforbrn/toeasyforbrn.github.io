import { useEffect } from 'react'
import { variablesEscena } from '../lib/escena'

// Variables que usa el resto de la página (menú y textos). Las demás solo las usa la escena,
// así que se ponen en .escena: el navegador recalcula menos estilos en cada scroll.
const GLOBALES = new Set(['--tinta', '--acento', '--cieloArriba'])

// Escucha el scroll y actualiza las variables CSS de la escena (día → noche).
// No usa estado de React a propósito: la página no se vuelve a renderizar en cada movimiento.
export function useEscenaScroll() {
  useEffect(() => {
    const raiz = document.documentElement
    const escena = document.querySelector('.escena') || raiz
    const anteriores = {}
    let pendiente = false

    const dibujar = () => {
      pendiente = false
      const max = raiz.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      const vars = variablesEscena(p, window.innerHeight)
      for (const k in vars) {
        const v = typeof vars[k] === 'number' ? vars[k].toFixed(3) : vars[k]
        if (anteriores[k] === v) continue // no se toca lo que no cambió
        anteriores[k] = v
        ;(GLOBALES.has(k) ? raiz : escena).style.setProperty(k, v)
      }
      // Estado del búho: alas abiertas (volando) o cerradas (posado)
      const b = vars['--buho']
      const estado = b <= 0.001 ? 'oculto' : b < 0.995 ? 'volando' : 'posado'
      if (raiz.dataset.buho !== estado) raiz.dataset.buho = estado
    }

    const pedir = () => {
      if (!pendiente) {
        pendiente = true
        requestAnimationFrame(dibujar)
      }
    }

    dibujar()
    window.addEventListener('scroll', pedir, { passive: true })
    window.addEventListener('resize', pedir)
    return () => {
      window.removeEventListener('scroll', pedir)
      window.removeEventListener('resize', pedir)
    }
  }, [])
}
