// Mariposas cerca de las flores. Solo de día (se van con --mariposas).
const MARIPOSAS = [
  { x: 705, y: 515, color: '#ff9ec4', retraso: 0 },
  { x: 915, y: 522, color: '#ffe066', retraso: -1.7 },
  { x: 285, y: 530, color: '#9ad7ff', retraso: -3.1 },
]

export default function Mariposas() {
  return (
    <g className="mariposas">
      {MARIPOSAS.map((m, i) => (
        <g key={i} transform={`translate(${m.x} ${m.y})`}>
          <g className="mariposa-vuelo" style={{ animationDelay: `${m.retraso}s` }}>
            <g className="mariposa-alas">
              <path d="M0 0C-6 -9 -13 -7 -11 0C-13 7 -6 9 0 0Z M0 0C6 -9 13 -7 11 0C13 7 6 9 0 0Z" fill={m.color} />
              <path d="M0 -4V4" stroke="#3a2e3f" strokeWidth="1.6" />
            </g>
          </g>
        </g>
      ))}
    </g>
  )
}
