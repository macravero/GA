import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import {useViewsContext} from '../../context/ViewsContext/ViewsContext'
import './Home.css'
import Lascano from '../../media/Home/static-lascano.png'
import SquareOne from '../../media/Home/sq1.jpg'
import SquareTwo from '../../media/Home/sq2.jpg'
import SquareThree from '../../media/Home/sq3.jpg'
import SquareFour from '../../media/Home/sq4.jpg'
import SquareFive from '../../media/Home/sq5.jpg'
import SquareSix from '../../media/Home/sq6.jpg'
import Logo from '../../media/Home/logo_mecenazgo.png'
//hack 1
import Warning from '../../media/Home/advertencia.PNG'
import Hack1BG from '../../media/Home/hack_1_bg.jpg'
import Hack2BG from '../../media/Home/hack_2_bg.jpg'
import Hack3BG from '../../media/Home/hack_3_bg.jpg'
//hack2
import Warning2 from '../../media/Home/advertencia2.PNG'
import SecondErrorGif from '../../media/Home/2.gif'
import Hack4BG from '../../media/Home/hack_4_bg.jpg'
import Hack5BG from '../../media/Home/hack_5_bg.jpg'
//hack3
import Warning3 from '../../media/Home/advertencia3.PNG'
import ThirdErrorGif from '../../media/Home/3.gif'
import Hack6BG from '../../media/Home/hack_6_bg.jpg';
import Hack7BG from '../../media/Home/hack_7_bg.jpg';
import Hack8BG from '../../media/Home/hack_8_bg.jpg';
//hack4
import Warning4 from '../../media/Home/advertencia4.PNG'
import Hack9BG from '../../media/Home/hack_9_bg.jpg';
import Hack10BG from '../../media/Home/hack_10_bg.jpg';
import Hack11BG from '../../media/Home/hack_11_bg.jpg';
//hack final
import Warning5 from '../../media/Home/advertencia5.PNG'
import Hack12BG from '../../media/Home/hack_12_bg.jpg';


function Home({visited, setVisited, updateOverlayGif}) {

  //state
  const [textContent, setTextContent] = useState('POR FAVOR, NO CLICKEE AQUÍ')
  const [currentHackState, setCurrentHackState] = useState(0)
  const [currentMessage, setCurrentMessage] = useState({img:Warning, display: true})
  const [finishedLoading, setFinishedLoading] = useState(false)
  const [isClickable, setIsClickable] = useState(false)
  const { setViewBackground } = useViewsContext();
  //animations
  const pinkAnimation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 500 })
  const lascanoAnimation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: !visited ? 1700 : 0, config: { duration: 1250 } })
  const sq1Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 3700 })
  const sq2Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 3900 })
  const sq3Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 4100 })
  const sq4Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 4300 })
  const sq5Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 4500 })
  const sq6Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 4700 })
  const logoAnimation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 5200 })
  // warning messages and button animations
  const warningAnimation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 6700 })
  const buttonAnimation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 6700 })


  useEffect(()=>{
    if(visited){
      setFinishedLoading(true)
    }
    else {
      setTimeout(()=>{
        setFinishedLoading(true)
      },6700)
    }
    setVisited(true)
  },[])

  useEffect(() =>{
    switch(currentHackState){
      case 1:
        {
          setViewBackground(`url(${Hack1BG})`)
          setCurrentMessage({img: Warning2, display: false })
          setTextContent('EN SERIO, NO CLICKEÉ AQUÍ')
          updateOverlayGif(true)
          setTimeout(()=>{
            updateOverlayGif(false)
          }, 1500)
          setTimeout(()=>{
            setViewBackground(`url(${Hack2BG})`)
            setCurrentMessage({img: Warning2, display: true })
            setIsClickable(true)
          },2000)
        break
        }
      case 2:{
        setIsClickable(false)
        setCurrentMessage({img: Warning3, display: false })
        setTextContent('OK. PARECE QUE USTED REALMENTE QUIERE CLIQUEAR AQUÍ; NO LO HAGA.')
        setViewBackground(`url(${Hack3BG})`)
        setTimeout(()=>{
          updateOverlayGif(true, SecondErrorGif)
        },500)
        setTimeout(()=>{
          setViewBackground(`url(${Hack4BG})`)
          updateOverlayGif(false)
        },2000)
        setTimeout(()=>{
          setViewBackground(`url(${Hack5BG})`)
          setCurrentMessage({img: Warning3, display: true })
          setIsClickable(true)
        },3500)
        break
      }
      case 3:{
        setIsClickable(false)
        setCurrentMessage({img: Warning4, display: false })
        setTextContent('SI USTED CLIQUEA UNA VEZ MÁS AQUÍ SERÁ EL FIN DEL MUNDO')
        setViewBackground(`url(${Hack6BG})`)
        setTimeout(()=>{
          updateOverlayGif(true, ThirdErrorGif)
        },500)
        setTimeout(()=>{
          setViewBackground(`url(${Hack7BG})`)
          updateOverlayGif(false)
        },3500)
        setTimeout(()=>{
          setViewBackground(`url(${Hack8BG})`)
          setCurrentMessage({img: Warning4, display: true })
          setIsClickable(true)
        },4000)
        break
      }
      case 4:{
        setIsClickable(false)
        setCurrentMessage({img: Warning5, display: false })
        setTextContent('YA TODOS SABEMOS QUE USTED VA A CLIQUEAR UNA VEZ MÁS AQUÍ...  HÁGALO Y AVANCEMOS CON NUESTRAS VIDAS.')
        setViewBackground(`url(${Hack9BG})`)
        setTimeout(()=>{
          setViewBackground(`url(${Hack10BG})`)
        },500)
        setTimeout(()=>{
          setViewBackground(`url(${Hack11BG})`)
          updateOverlayGif(false)
          setCurrentMessage({img: Warning5, display: true })
          setIsClickable(true)
        },1000)
        break
      }
      case 5:{
        setIsClickable(false)
          setViewBackground(`url(${Hack12BG})`)
          setCurrentMessage({img: Warning5, display: false })
        break
      }
      default:
        return
    }
  }, [currentHackState])

  // set hack state and animations
  const updateHackStatus = () => {
    if(finishedLoading){
    setCurrentHackState(currentHackState +1)
    }
    if(currentHackState > 3){
      window.open('https://mateoamaral.itch.io/videorealidad','_blank')
    }
  }
  return (
    <div className='Home'>
      <animated.div style={currentHackState===0 ? pinkAnimation : {display: 'none'}} className="Square"></animated.div>
      <animated.img style={currentHackState===0 ? lascanoAnimation : {display: 'none'}} src={Lascano} onClick={updateHackStatus} className="Lascano" alt="" />
      <animated.img style={currentHackState===0 ? sq1Animation : {display: 'none'}} src={SquareOne} className='SquareOne' alt="" />
      <animated.img style={currentHackState===0 ? sq2Animation : {display: 'none'}} src={SquareTwo} className='SquareTwo' alt="" />
      <animated.img style={currentHackState===0 ? sq3Animation : {display: 'none'}} src={SquareThree} className='SquareThree' alt="" />
      <animated.img style={currentHackState===0 ? sq4Animation : {display: 'none'}} src={SquareFour} className='SquareFour' alt="" />
      <animated.img style={currentHackState===0 ? sq5Animation : {display: 'none'}} src={SquareFive} className='SquareFive' alt="" />
      <animated.img style={currentHackState===0 ? sq6Animation : {display: 'none'}} src={SquareSix} className='SquareSix' alt="" />
      <animated.img style={currentMessage.display ? warningAnimation : {display: 'none'}} src={currentMessage.img} className='warningMessage' alt='warning message' />
      {isClickable ? <div onClick={updateHackStatus} className='lascanoArea'/> : null}
      <animated.a style={currentHackState===0 ? logoAnimation : {display: 'none'}} href='https://www.buenosaires.gob.ar/mecenazgo' target='_blank'><img src={Logo} className='Logo' alt='' /></animated.a>
      <animated.div style={currentMessage.display ? buttonAnimation : {display: 'none'}} className='warning' onClick={updateHackStatus}><span className='circle'></span><br/>{textContent}</animated.div>
    </div>
  )
}

export default Home
