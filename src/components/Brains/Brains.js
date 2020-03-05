import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import ClickButton from './ClickButton/ClickButton'
import BG from '../../media/Brains/background.png'
import './Brains.css'
function Brains() {
  const [pressedButton, setPressedButton] = useState(0)

  const [cameraOne, setCameraOne] = useState(false)
  const [cameraTwo, setCameraTwo] = useState(false)
  const [cameraThree, setCameraThree] = useState(false)
  // Element animations
  const fontAnimation = useSpring({ marginTop: -1200, from: { marginTop: 400 }, delay: 300, duration: 3000 })
  // const clickButtonAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 9500 })
  const backgroundAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 12500 })
  const introAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 })
  return (
    <div className="Brains">
      <animated.div style={introAnimation}><animated.p style={fontAnimation}>Conectado a una interfaz cerebro-computadora, el director Federico Pintos remixa su película en tiempo real. Sus estados mentales son medios de acceso a diferentes escenas de la película, tomas alternativas y materiales inéditos, a la vez que regulan parámetros de procesamiento sonoro y visual.</animated.p></animated.div>
      <animated.div style={backgroundAnimation} className='Background'>
        <animated.div style={backgroundAnimation} onClick={() => setCameraOne(true)} className='Button Click1'>CLICK</animated.div>
        <animated.div style={backgroundAnimation} onClick={() => setCameraTwo(true)} className='Button Click2'>CLICK</animated.div>
        <animated.div style={backgroundAnimation} onClick={() => setCameraThree(true)} className='Button Click3'>CLICK</animated.div>
        {cameraOne && <div className="gif1"><span onClick={() => setCameraOne(false)}>X</span></div>}
        {cameraTwo && <div className="gif2"><span onClick={() => setCameraTwo(false)}>X</span></div>}
        {cameraThree && <div className='ficha'><span onClick={() => setCameraThree(false)}>X</span></div>}
      </animated.div>
    </div>
  )
}

export default Brains
