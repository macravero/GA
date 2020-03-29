import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import ClickButton from './ClickButton/ClickButton'
import GifContainer from './GifContainer/GifContainer'
import Soundwave from '../../media/Brains/soundwave.gif'
import Encore from '../../media/Brains/encore.gif'
import Blackhole from '../../media/Brains/blackhole.gif'
import Circle from '../../media/Brains/circle.gif'
import Glitch from '../../media/Brains/glitch.gif'
import Loop from '../../media/Brains/loophole.gif'
import './Brains.css'

const SoundwaveContainer = styled(animated.div)`
  position: absolute;
  top: 4%;
  right: 11%;
  width: 20rem;
  height: 11rem;
  border: solid 1px white;
  background: url("${Soundwave}");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`
const EncoreContainer = styled(animated.div)`
  position: absolute;
  top: 4%;
  right: 30%;
  width: 20rem;
  height: 11rem;
  background: url("${Encore}");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`
const BlackholeContainer = styled(animated.div)`
  position: absolute;
  top: 9%;
  left: 24.5%;
  width: 10.1rem;
  height: 16rem;
  background: url('${Blackhole}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
const CircleContainer = styled(animated.div)`
  position: absolute;
  bottom: 20%;
  right: 26.5%;
  width: 10rem;
  height: 10rem;
  border: 1px solid white;
  background: url('${Circle}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
const GlitchContainer1 = styled(animated.div)`
  position: absolute;
  bottom: 18%;
  right: 16.5%;
  width: 10rem;
  height: 10rem;
  background: url('${Glitch}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
const GlitchContainer2 = styled(animated.div)`
  position: absolute;
  bottom: 18%;
  left: 36.5%;
  width: 10rem;
  height: 10rem;
  background: url('${Glitch}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
const GlitchContainer3 = styled(animated.div)`
  position: absolute;
  bottom: 18%;
  left: 26.5%;
  width: 10rem;
  height: 10rem;
  background: url('${Glitch}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
const LoopContainer = styled(animated.div)`
  position: absolute;
  top: 33%;
  left: 18.5%;
  width: 10.6rem;
  height: 16rem;
  background: url('${Loop}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
function Brains() {
  const [pressedButton, setPressedButton] = useState(0)

  const [cameraOne, setCameraOne] = useState(false)
  const [cameraTwo, setCameraTwo] = useState(false)
  const [cameraThree, setCameraThree] = useState(false)
  const [gifPosition, setGifPosition] = useState(1);
  // Element animations
  const fontAnimation = useSpring({ marginTop: -1200, from: { marginTop: 400 }, delay: 300, duration: 3000 })
  // const clickButtonAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 9500 })
  const backgroundAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 12500 })
  const introAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 })
  return (
    <div className="Brains">
      <animated.div style={introAnimation}><animated.p style={fontAnimation}>Conectado a una interfaz cerebro-computadora, el director Federico Pintos remixa su película en tiempo real. Sus estados mentales son medios de acceso a diferentes escenas de la película, tomas alternativas y materiales inéditos, a la vez que regulan parámetros de procesamiento sonoro y visual.</animated.p></animated.div>
      <animated.div style={backgroundAnimation} className='Background'>
        <SoundwaveContainer style={backgroundAnimation}/>
        <EncoreContainer style={backgroundAnimation}/>
        <BlackholeContainer style={backgroundAnimation}/>
        <CircleContainer style={backgroundAnimation}/>
        <GlitchContainer1 style={backgroundAnimation}/>
        <GlitchContainer2 style={backgroundAnimation}/>
        <GlitchContainer3 style={backgroundAnimation}/>
        <LoopContainer style={backgroundAnimation}/>
        <animated.div style={backgroundAnimation} onClick={() => setCameraOne(true)} className='Button Click1'>CLICK</animated.div>
        <animated.div style={backgroundAnimation} onClick={() => setCameraTwo(true)} className='Button Click2'>CLICK</animated.div>
        <animated.div style={backgroundAnimation} onClick={() => setCameraThree(true)} className='Button Click3'>CLICK</animated.div>
        {gifPosition > 0 && <GifContainer/>}
        {cameraOne && <div className="gif1"><span onClick={() => setCameraOne(false)}>X</span></div>}
        {cameraTwo && <div className="gif2"><span onClick={() => setCameraTwo(false)}>X</span></div>}
        {cameraThree && <div className='ficha'><span onClick={() => setCameraThree(false)}>X</span></div>}
      </animated.div>
    </div>
  )
}

export default Brains
