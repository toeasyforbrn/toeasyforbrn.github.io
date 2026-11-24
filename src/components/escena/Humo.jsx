// Bocanadas de humo saliendo de la chimenea (x 891, y 264 en el dibujo).
// Cada una arranca con un retraso distinto para que el humo sea continuo.
export default function Humo({ bocanadas = 5 }) {
  return (
    <g className="humo">
      {Array.from({ length: bocanadas }, (_, i) => (
        <circle key={i} cx="891" cy="264" r="12" style={{ animationDelay: `${-i * 0.9}s` }} />
      ))}
    </g>
  )
}
