import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Reproductor.css'
function Reproductor(props) {
  const buttonAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 16500, })
  props.setFontColor('black')
  const positive = ['"Una mirada punzante sobre el arte contemporáneo"', 'Luis Paz, Página/12', '"El virus entró al sistema“', 'Diego Erlan, Revista Ñ, Clarín', '“Un film tan exótico como cautivante”', 'Alejandro Lingenti, La Nación', '"Un juego sobre la ontología de la imagen y el concepto de verdad en la era digital"', 'Diego Lerer, Micropsia/Otros Cines']
  const negative = ['“¿Qué VJs? ¿Los de MTV?"', 'La mayoría de la gente.', '“¿Por qué no tiene más partes documentales?"', 'Algunos amantes del cine documental.', '“¿Por qué no tiene más partes de ficción?"', 'Algunos amantes del cine de ficción.', '“Esta versión ampliada me hace acordar a los extras de un DVD”', 'Alguien que miraba muchos DVDs.', '“¿Qué es un DVD?”', 'La gente joven.']
  const [ampliada, setAmpliada] = useState(false);
  ampliada && props.setFontColor('white')
  const setExtendedVersion = () => {
    setAmpliada(true);
  }
  return (
    <div className={ampliada ? 'Reproductor ampliado' : 'Reproductor'}>
      <div className="movieContainer">
        <iframe className='movie' src="https://www.youtube-nocookie.com/embed/FQNnoQLkMyo?&autoplay=1" showinfo='0' frameborder="0" allow="autoplay,encrypted-media" allowfullscreen></iframe>
      </div>
      <div className="criticsContainer">
        <h2>CRITICAS</h2>
        <div className="critica">
          <p>{ampliada ? negative[0] : positive[0]}</p>
          <p>{ampliada ? negative[1] : positive[1]}</p>
        </div>
        <div className="critica">
          <p>{ampliada ? negative[2] : positive[2]}</p>
          <p>{ampliada ? negative[3] : positive[3]}</p>
        </div>
        <div className="critica">
          <p>{ampliada ? negative[4] : positive[4]}</p>
          <p>{ampliada ? negative[5] : positive[5]}</p>
        </div>
        <div className="critica">
          <p>{ampliada ? negative[6] : positive[6]}</p>
          <p>{ampliada ? negative[7] : positive[7]}</p>
        </div>
        {ampliada && <div className="critica">
          <p>{negative[8]}</p>
          <p>{negative[9]}</p>
        </div>}
      </div>
      <animated.div style={buttonAnimation} onClick={setExtendedVersion} className={ampliada ? 'hackButton hide' : 'hackButton'}>JAQUEAR</animated.div>
    </div>
  )
}

export default Reproductor
