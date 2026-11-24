import paisajeDia from '../../assets/jarabacoa-dia.svg'
import paisajeAtardecer from '../../assets/jarabacoa-atardecer.svg'
import paisajeNoche from '../../assets/jarabacoa-noche.svg'
import frenteDia from '../../assets/frente-dia.svg'
import frenteAtardecer from '../../assets/frente-atardecer.svg'
import frenteNoche from '../../assets/frente-noche.svg'
import { useEsCelular } from '../../hooks/useEsCelular'
import Corriente from './Corriente'
import Humo from './Humo'
import LuzVentana from './LuzVentana'
import Mariposas from './Mariposas'
import Buho from './Buho'
import Luciernagas from './Luciernagas'

// Capas, de atrás hacia adelante (todas miden 1200 x 600 y se alinean igual):
// 1. paisaje (día, atardecer y noche se mezclan)  2. corriente del río
// 3. capa delantera (pino grande y piedras del río)  4. efectos: humo, luz, mariposas, búho y luciérnagas
export default function Paisaje() {
  const celular = useEsCelular()
  // En celular se enfoca la parte derecha (cabaña, cerca y búho)
  const ajuste = celular ? 'xMaxYMax slice' : 'xMidYMax slice'

  return (
    <div className="paisaje">
      <img src={paisajeDia} alt="" className="capa" />
      <img src={paisajeAtardecer} alt="" className="capa capa-atardecer" />
      <img src={paisajeNoche} alt="" className="capa capa-noche" />
      {/* La corriente va entre el paisaje y la capa delantera, así pasa DETRÁS del pino y las piedras */}
      <svg className="capa efectos" viewBox="0 0 1200 600" preserveAspectRatio={ajuste}>
        <Corriente />
      </svg>
      <img src={frenteDia} alt="" className="capa" />
      <img src={frenteAtardecer} alt="" className="capa capa-atardecer" />
      <img src={frenteNoche} alt="" className="capa capa-noche" />
      <svg className="capa efectos" viewBox="0 0 1200 600" preserveAspectRatio={ajuste}>
        {/* Brillos con degradados radiales (más livianos que los filtros de desenfoque) */}
        <defs>
          <radialGradient id="brilloLuz">
            <stop offset="0" stopColor="#ffd27a" stopOpacity=".9" />
            <stop offset="1" stopColor="#ffd27a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="brilloLuciernaga">
            <stop offset="0" stopColor="#f4ff9a" stopOpacity=".8" />
            <stop offset="1" stopColor="#f4ff9a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bocanada">
            <stop offset="0" style={{ stopColor: 'var(--humo, #fff)', stopOpacity: 0.8 }} />
            <stop offset=".6" style={{ stopColor: 'var(--humo, #fff)', stopOpacity: 0.35 }} />
            <stop offset="1" style={{ stopColor: 'var(--humo, #fff)', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <Humo />
        <LuzVentana />
        <Mariposas />
        <Buho />
        <Luciernagas />
      </svg>
    </div>
  )
}
