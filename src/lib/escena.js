// Toda la escena depende de un solo número: p, el progreso del scroll (0 = arriba, 1 = abajo).
// Aquí se define qué color o valor tiene cada cosa en cada punto del scroll.

// Suaviza el paso entre dos puntos (0 antes de a, 1 después de b)
export const suave = (a, b, p) => {
  const t = Math.min(1, Math.max(0, (p - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

const hexARgb = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16))

// Mezcla los colores de una lista de paradas [[p, '#hex'], ...]
export const rampa = (paradas, p) => {
  let i = 0
  while (i < paradas.length - 2 && p > paradas[i + 1][0]) i++
  const [a, ca] = paradas[i]
  const [b, cb] = paradas[i + 1]
  const t = Math.min(1, Math.max(0, (p - a) / (b - a)))
  const A = hexARgb(ca)
  const B = hexARgb(cb)
  return `rgb(${A.map((v, k) => Math.round(v + (B[k] - v) * t)).join(',')})`
}

// Colores: día → atardecer → anochecer → noche
export const PALETA = {
  cieloArriba: [[0, '#8fcdf0'], [0.22, '#9cc6e2'], [0.38, '#7088b2'], [0.52, '#34416e'], [0.7, '#111634'], [1, '#080a1c']],
  cieloAbajo: [[0, '#e8f5f6'], [0.22, '#f6e4cc'], [0.38, '#e8c0a6'], [0.52, '#5d6890'], [0.7, '#2a3266'], [1, '#1b2050']],
  nube: [[0, '#ffffff'], [0.3, '#fbe9dc'], [0.5, '#7e88ad'], [0.7, '#2b3670'], [1, '#222a5c']],
  nube2: [[0, '#e6f2fb'], [0.3, '#fff1e6'], [0.5, '#8d97bb'], [0.7, '#3d4a8a'], [1, '#2e3870']],
  humo: [[0, '#ffffff'], [0.38, '#f3e6e0'], [0.6, '#9aa3c8'], [1, '#8a93b8']],
  tinta: [[0, '#1b2440'], [0.4, '#1b2440'], [0.45, '#f5f1e8'], [1, '#f5f1e8']],
  acento: [[0, '#b8430f'], [0.4, '#8a3a1a'], [0.45, '#ffd27a'], [1, '#ffd27a']],
  sol: [[0, '#ffd75e'], [0.3, '#ffc56a'], [0.42, '#ffa865']],
}

// Calcula todas las variables CSS para un progreso p y una altura de pantalla
export function variablesEscena(p, alto) {
  const v = {}
  for (const k in PALETA) v[`--${k}`] = rampa(PALETA[k], p)
  v['--solY'] = `${Math.round(alto * (0.1 + suave(0, 0.42, p) * 0.5))}px` // el sol baja
  v['--solOp'] = 1 - suave(0.36, 0.48, p) // y desaparece detrás de las montañas
  v['--lunaY'] = `${Math.round(alto * (0.62 - suave(0.46, 0.85, p) * 0.52))}px` // la luna sube
  v['--lunaOp'] = suave(0.44, 0.6, p)
  v['--atardecerOp'] = suave(0.16, 0.36, p) // capa del paisaje al atardecer
  v['--nocheOp'] = suave(0.42, 0.64, p) // capa del paisaje de noche
  v['--aves'] = 1 - suave(0.22, 0.4, p)
  v['--mariposas'] = 1 - suave(0.18, 0.34, p)
  v['--estrellas'] = suave(0.45, 0.72, p)
  v['--luciernagas'] = suave(0.58, 0.78, p)
  v['--luces'] = suave(0.4, 0.56, p)
  v['--corriente'] = 0.75 - suave(0.4, 0.7, p) * 0.35
  v['--buho'] = suave(0.62, 0.76, p)
  return v
}
