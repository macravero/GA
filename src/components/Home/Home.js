import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import './Home.css'
import Lascano from '../../media/Home/static-lascano.png'
import SquareOne from '../../media/Home/sq1.jpg'
import SquareTwo from '../../media/Home/sq2.jpg'
import SquareThree from '../../media/Home/sq3.jpg'
import SquareFour from '../../media/Home/sq4.jpg'
import SquareFive from '../../media/Home/sq5.jpg'
import SquareSix from '../../media/Home/sq6.jpg'
import Logo from '../../media/Home/logo_mecenazgo.png'

function Home(props) {
  const {visited, setVisited} = props
  const pinkAnimation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 500 })
  const lascanoAnimation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: !visited ? 1700 : 0, config: { duration: 1250 } })
  const sq1Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 3700 })
  const sq2Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 3900 })
  const sq3Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 4100 })
  const sq4Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 4300 })
  const sq5Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 4500 })
  const sq6Animation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 4700 })
  const logoAnimation = useSpring(!visited && { opacity: 1, from: { opacity: 0 }, delay: 5200 })
  useEffect(()=> () => setVisited(true))
  return (
    <div className='Home'>
      <animated.div style={pinkAnimation} className="Square"></animated.div>
      <a href="https://mateoamaral.itch.io/videorealidad"><animated.img style={lascanoAnimation} src={Lascano} className="Lascano" alt="" /></a>
      <animated.img style={sq1Animation} src={SquareOne} className='SquareOne' alt="" />
      <animated.img style={sq2Animation} src={SquareTwo} className='SquareTwo' alt="" />
      <animated.img style={sq3Animation} src={SquareThree} className='SquareThree' alt="" />
      <animated.img style={sq4Animation} src={SquareFour} className='SquareFour' alt="" />
      <animated.img style={sq5Animation} src={SquareFive} className='SquareFive' alt="" />
      <animated.img style={sq6Animation} src={SquareSix} className='SquareSix' alt="" />
      <animated.a style={logoAnimation} href='https://www.buenosaires.gob.ar/mecenazgo' target='_blank'><img src={Logo} className='Logo' alt='' /></animated.a>
    </div>
  )
}

export default Home
