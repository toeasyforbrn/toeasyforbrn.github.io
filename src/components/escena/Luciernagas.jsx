import { useMemo } from 'react'

// Pocas luciérnagas flotando sobre la grama. Aparecen con --luciernagas.
export default function Luciernagas({ cantidad = 9 }) {
  const puntos = useMemo(
    () =>
      Array.from({ length: cantidad }, (_, i) => ({
        // la mayoría al lado de la cabaña, algunas del lado del río
        x: i % 3 ? 520 + Math.random() * 660 : 40 + Math.random() * 430,
        y: 400 + Math.random() * 175,
        retraso: -Math.random() * 7,
        duracion: 5 + Math.random() * 4,
        pulso: -Math.random() * 2,
      })),
    [cantidad],
  )

  return (
    <g className="luciernagas">
      {puntos.map((l, i) => (
        <g key={i} transform={`translate(${l.x.toFixed(0)} ${l.y.toFixed(0)})`}>
          <g className="luciernaga" style={{ animationDelay: `${l.retraso}s`, animationDuration: `${l.duracion}s` }}>
            <circle r="9" fill="url(#brilloLuciernaga)" />
            <circle r="2.2" className="luciernaga-centro" style={{ animationDelay: `${l.pulso}s` }} />
          </g>
        </g>
      ))}
    </g>
  )
}
