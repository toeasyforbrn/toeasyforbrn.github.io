// El búho llega volando desde arriba a la derecha y se posa en el poste de la cerca.
// useEscenaScroll pone en <html data-buho="oculto | volando | posado"> su estado,
// y la variable --buho (0 → 1) marca cuánto le falta para llegar.
//   volando: alas abiertas aleteando, patas recogidas
//   posado: alas cerradas, patas sobre el poste, parpadea con los párpados
const X = 787.5
const Y = 468
// Ala izquierda extendida (redondeada, con plumas en el borde); la derecha es la misma reflejada
const ALA = 'M770 432 C752 414 724 404 700 410 C693 412 691 418 698 421 C691 425 692 431 699 432 C694 437 696 443 703 442 C700 448 705 453 712 450 C717 456 725 458 731 454 C741 458 753 457 761 451 C767 448 771 444 770 438Z'
const ALA_LUZ = 'M768 437 C752 424 732 419 712 423 C726 428 742 437 758 446 C763 445 767 442 768 437Z'
const PLUMAS = 'M712 431 l14 3 M714 441 l14 -1 M724 449 l10 -5'

function Ala({ reflejada }) {
  // las alas se dibujan al 70% desde el hombro para que no se vean exageradas
  const contenido = (
    <g transform="translate(769 440) scale(.7) translate(-769 -440)">
    <g className="ala">
      <path d={ALA} fill="#1b879d" />
      <path d={ALA_LUZ} fill="#2aa6bb" />
      <path d={PLUMAS} stroke="#5cc3d3" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </g>
    </g>
  )
  return reflejada ? <g transform={`translate(${X * 2} 0) scale(-1 1)`}>{contenido}</g> : contenido
}

export default function Buho() {
  return (
    <g className="buho">
      <g className="buho-vuelo">
        <g transform={`translate(${X} ${Y}) scale(.6) translate(${-X} ${-Y})`}>
          <g className="buho-cuerpo">
            {/* Alas abiertas (solo volando) */}
            <g className="alas-abiertas">
              <Ala />
              <Ala reflejada />
            </g>

            {/* Cuerpo y barriga */}
            <ellipse cx={X} cy="444" rx="21" ry="25" fill="#1b879d" />
            <ellipse cx={X} cy="450" rx="13" ry="16" fill="#5cc3d3" />

            {/* Alas cerradas (solo posado) */}
            <g className="alas-cerradas">
              <ellipse cx="768.5" cy="446" rx="6" ry="13" fill="#1b879d" />
              <ellipse cx="806.5" cy="446" rx="6" ry="13" fill="#1b879d" />
            </g>

            {/* Cabeza con orejas y copete */}
            <path d="M765.5 438 Q761.5 408 769.5 402 L779.5 412 Q787.5 409 795.5 412 L805.5 402 Q813.5 408 809.5 438 Q787.5 447 765.5 438Z" fill="#2aa6bb" />
            <path d="M784.5 411 l1 -7 l2 5 l2 -6 l1 7Z" fill="#2aa6bb" />

            {/* Ojos */}
            <circle cx="778" cy="426" r="9.5" fill="#fff" />
            <circle cx="797" cy="426" r="9.5" fill="#fff" />
            <circle cx="777" cy="427" r="5.2" fill="#b8862b" />
            <circle cx="798" cy="427" r="5.2" fill="#b8862b" />
            <circle cx="777" cy="427" r="2.8" fill="#1a1626" />
            <circle cx="798" cy="427" r="2.8" fill="#1a1626" />
            <circle cx="777.5" cy="424.5" r="1.3" fill="#fff" />
            <circle cx="799.5" cy="424.5" r="1.3" fill="#fff" />
            {/* Párpados: bajan y suben para parpadear */}
            <ellipse className="parpado" cx="778" cy="426" rx="10.2" ry="10.2" fill="#2aa6bb" />
            <ellipse className="parpado" cx="797" cy="426" rx="10.2" ry="10.2" fill="#2aa6bb" />

            {/* Pico */}
            <path d="M784 433 L791 433 L787.5 441Z" fill="#e8b923" />

            {/* Patas (solo posado) */}
            <g className="patas">
              <path d="M776.5 466 q1 4 2.5 0 q1 4 2.5 0 q1 4 2.5 0 Z M790.5 466 q1 4 2.5 0 q1 4 2.5 0 q1 4 2.5 0 Z" fill="#e8b923" />
              <rect x="776.5" y="463" width="8" height="4" rx="2" fill="#e8b923" />
              <rect x="790.5" y="463" width="8" height="4" rx="2" fill="#e8b923" />
            </g>
          </g>
        </g>
      </g>
    </g>
  )
}
