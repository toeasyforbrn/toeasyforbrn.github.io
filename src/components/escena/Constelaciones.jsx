// Constelaciones reales dibujadas en el cielo de noche (aparecen con --estrellas).
// Cada una tiene sus estrellas (x, y, tamaño) y las líneas que las unen (índices de estrellas).
const CONSTELACIONES = [
  {
    // Osa Mayor (el "cucharón")
    nombre: 'osa-mayor',
    lugar: { left: '6%', top: '7%', width: '19%' },
    vista: '0 0 200 110',
    estrellas: [[10, 30, 2.2], [48, 22, 2], [80, 34, 2], [108, 44, 2.2], [118, 78, 2.4], [160, 86, 2.2], [176, 52, 2.4]],
    lineas: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]],
  },
  {
    // Casiopea (la "W")
    nombre: 'casiopea',
    lugar: { left: '40%', top: '5%', width: '13%' },
    vista: '0 0 140 70',
    estrellas: [[8, 20, 2.2], [38, 52, 2], [70, 30, 2.4], [100, 56, 2], [132, 14, 2.2]],
    lineas: [[0, 1], [1, 2], [2, 3], [3, 4]],
  },
  {
    // Orión (cinturón de tres estrellas)
    nombre: 'orion',
    lugar: { left: '56%', top: '22%', width: '11%' },
    vista: '0 0 120 150',
    estrellas: [[22, 12, 2.6], [96, 18, 2.2], [48, 72, 1.9], [60, 76, 1.9], [72, 80, 1.9], [28, 136, 2.2], [100, 132, 2.6]],
    lineas: [[0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6], [0, 1]],
  },
  {
    // Cruz del Sur
    nombre: 'cruz-del-sur',
    lugar: { left: '26%', top: '30%', width: '7%' },
    vista: '0 0 80 100',
    estrellas: [[40, 8, 2.4], [42, 92, 2.6], [8, 50, 2], [70, 44, 2.2]],
    lineas: [[0, 1], [2, 3]],
  },
]

export default function Constelaciones() {
  return (
    <div className="constelaciones">
      {CONSTELACIONES.map((c, k) => (
        <svg key={c.nombre} viewBox={c.vista} style={{ ...c.lugar, animationDelay: `${-k * 1.7}s` }}>
          {c.lineas.map(([a, b], i) => (
            <line key={i} x1={c.estrellas[a][0]} y1={c.estrellas[a][1]} x2={c.estrellas[b][0]} y2={c.estrellas[b][1]} />
          ))}
          {c.estrellas.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} />
          ))}
        </svg>
      ))}
    </div>
  )
}
