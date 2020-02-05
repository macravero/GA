import React from 'react'
import { useSpring, animated } from 'react-spring'
import navbarIcon1 from '../../media/navbar/navbar-right.png'
import navbarIcon2 from '../../media/navbar/navbar-squares.png'
import './Navbar.css'
function Navbar(props) {
  const gaAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5200, })
  const peliAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5400, })
  const logoAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5000 })
  return (
    <div className='Navbar'>
      <animated.p style={gaAnimation} className={props.fontColor} onClick={() => props.setPos(0)}>GA /</animated.p>
      <animated.p style={peliAnimation} className={props.fontColor} onClick={() => props.setPos(3)}>VER PELICULA</animated.p>
      <animated.div style={logoAnimation} className="navbar-right">
        <img src={navbarIcon1} alt="" />
        <img src={navbarIcon2} alt="" />
      </animated.div>
    </div>
  )
}

export default Navbar
