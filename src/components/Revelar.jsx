import { useEffect, useRef, useState } from 'react'

// Hace aparecer su contenido (sube y se aclara) cuando entra en pantalla.
export default function Revelar({ as: Etiqueta = 'div', className = '', children, ...resto }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observador.observe(el)
    return () => observador.disconnect()
  }, [])

  return (
    <Etiqueta ref={ref} className={`revelar ${visible ? 'visible' : ''} ${className}`} {...resto}>
      {children}
    </Etiqueta>
  )
}
