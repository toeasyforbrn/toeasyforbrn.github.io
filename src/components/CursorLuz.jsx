import { useEffect, useRef } from 'react'

// Anillo de luz del cursor.
// El puntito de la luciérnaga es el cursor nativo (cero retraso). Este anillo es un elemento aparte
// que solo se abre sobre enlaces y botones, y se cierra más despacio para que se vea suave.
export default function CursorLuz() {
  const ref = useRef(null)

  useEffect(() => {
    const fino = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fino.matches) return
    const anillo = ref.current
    const interactivo = 'a, button, [role="button"], label'

    const mover = (e) => {
      // se escribe directo en el estilo, sin esperar a React: sigue al puntero sin retraso visible
      anillo.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }
    const entrar = (e) => {
      const el = e.target.closest?.(interactivo)
      if (!el) return
      anillo.classList.add('abierto')
      anillo.classList.toggle('morado', !!el.closest('.red-discord')) // Discord brilla en morado
    }
    const salir = (e) => {
      const hacia = e.relatedTarget
      if (!hacia || !hacia.closest?.(interactivo)) anillo.classList.remove('abierto')
    }
    const ocultar = () => anillo.classList.remove('abierto')

    window.addEventListener('pointermove', mover, { passive: true })
    document.addEventListener('mouseover', entrar)
    document.addEventListener('mouseout', salir)
    document.addEventListener('mouseleave', ocultar)
    return () => {
      window.removeEventListener('pointermove', mover)
      document.removeEventListener('mouseover', entrar)
      document.removeEventListener('mouseout', salir)
      document.removeEventListener('mouseleave', ocultar)
    }
  }, [])

  return (
    <div ref={ref} className="cursor-luz" aria-hidden="true">
      <span />
    </div>
  )
}
