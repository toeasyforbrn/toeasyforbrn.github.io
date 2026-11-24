// Nubes que cruzan el cielo. El color viene de --nube y --nube2 (cambian con el scroll).
const NUBES = [
  { top: 12, escala: 1, duracion: 110, retraso: -30 },
  { top: 24, escala: 0.7, duracion: 140, retraso: -90 },
  { top: 8, escala: 0.6, duracion: 125, retraso: -60 },
]

export default function Nubes() {
  return (
    <div className="nubes">
      {NUBES.map((n, i) => (
        <div
          key={i}
          className="nube"
          style={{ top: `${n.top}vh`, animationDuration: `${n.duracion}s`, animationDelay: `${n.retraso}s` }}
        >
          <svg viewBox="0 0 220 80" style={{ width: 220 * n.escala }}>
            <path className="nube-base" d="M30 70a28 28 0 0 1 22-42a40 40 0 0 1 72-12a30 30 0 0 1 52 18a24 24 0 0 1 10 36Z" />
            <circle className="nube-luz" cx="104" cy="38" r="22" />
          </svg>
        </div>
      ))}
    </div>
  )
}
