import { useEffect, useState } from 'react'

// true cuando la pantalla es angosta (celular). Coincide con el breakpoint "md" de Bootstrap.
export function useEsCelular(query = '(max-width: 767.98px)') {
  const [es, setEs] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const cambio = (e) => setEs(e.matches)
    mq.addEventListener('change', cambio)
    return () => mq.removeEventListener('change', cambio)
  }, [query])
  return es
}
