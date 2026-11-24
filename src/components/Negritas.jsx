// Convierte "texto <b>importante</b> texto" en JSX con <strong>, sin usar HTML crudo
export default function Negritas({ texto }) {
  const partes = texto.split(/<b>|<\/b>/)
  return partes.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : <span key={i}>{p}</span>))
}
