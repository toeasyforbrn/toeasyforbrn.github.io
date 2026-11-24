import { createContext, useContext, useEffect, useState } from 'react'

// Idioma de la página: 'es' o 'en'. Se recuerda en el navegador si es posible.
const IdiomaContext = createContext(null)

function idiomaInicial() {
  try {
    const guardado = localStorage.getItem('idioma')
    if (guardado === 'es' || guardado === 'en') return guardado
  } catch {
    /* sin acceso a localStorage: seguimos en español */
  }
  return 'es'
}

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial)

  useEffect(() => {
    document.documentElement.lang = idioma
    try {
      localStorage.setItem('idioma', idioma)
    } catch {
      /* no pasa nada si no se puede guardar */
    }
  }, [idioma])

  // t() recibe un texto simple o un objeto { es, en } y devuelve el del idioma actual
  const t = (texto) => (texto && typeof texto === 'object' ? texto[idioma] ?? texto.es : texto)
  const cambiar = () => setIdioma((i) => (i === 'es' ? 'en' : 'es'))

  return <IdiomaContext.Provider value={{ idioma, cambiar, t }}>{children}</IdiomaContext.Provider>
}

export const useIdioma = () => useContext(IdiomaContext)
