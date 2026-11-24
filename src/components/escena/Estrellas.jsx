import { useMemo } from 'react'

export default function Estrellas({ cantidad = 90 }) {
  // Se calculan una sola vez para que no cambien de lugar en cada render
  const estrellas = useMemo(
    () =>
      Array.from({ length: cantidad }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 62,
        grande: Math.random() < 0.15,
        retraso: -Math.random() * 3,
      })),
    [cantidad],
  )

  return (
    <div className="estrellas">
      {estrellas.map((e, i) => (
        <i
          key={i}
          className={e.grande ? 'grande' : ''}
          style={{ left: `${e.x}%`, top: `${e.y}%`, animationDelay: `${e.retraso}s` }}
        />
      ))}
    </div>
  )
}
