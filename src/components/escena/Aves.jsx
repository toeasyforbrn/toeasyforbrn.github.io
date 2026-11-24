// Aves que cruzan de izquierda a derecha durante el día. Se desvanecen con --aves.
const AVES = [
  { top: 14, duracion: 24, retraso: 0 },
  { top: 17, duracion: 26, retraso: -3 },
  { top: 12, duracion: 28, retraso: -6 },
  { top: 20, duracion: 22, retraso: -12 },
]

export default function Aves() {
  return (
    <div className="aves">
      {AVES.map((a, i) => (
        <div key={i} className="ave" style={{ top: `${a.top}vh`, animationDuration: `${a.duracion}s`, animationDelay: `${a.retraso}s` }}>
          <svg viewBox="0 0 30 12">
            <path d="M1 3q7 -1 14 8q7 -9 14 -8" />
          </svg>
        </div>
      ))}
    </div>
  )
}
