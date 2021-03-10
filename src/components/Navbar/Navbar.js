import React from 'react'
import { useSpring, animated } from 'react-spring'
import navbarIg from '../../media/navbar/navbar-ig.png'
import {useViewsContext} from '../../context/ViewsContext/ViewsContext';
import './Navbar.css'

function Navbar() {

  const { pos, setPos, fontColor } = useViewsContext();

  const gaAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5200, })
  const peliAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5400, })
  const logoAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5000 })

  return (
    <div className='Navbar' style={pos === 2 ? {paddingTop: '3rem'} : {}}>
      <animated.p style={gaAnimation} className={fontColor} onClick={() => setPos(0)}>GA /</animated.p>
      <animated.p style={peliAnimation} className={fontColor} onClick={() => setPos(3)}>VER PELICULA</animated.p>
      <animated.div style={logoAnimation} className="navbar-right">
        <p onClick={() => setPos(1)} className={fontColor}>(2)</p>
        <p onClick={() => setPos(2)} className={fontColor}>(3)</p>
        <a href="https://www.instagram.com/videorrealidad/" target="_blank"><img src={navbarIg}/></a>
      </animated.div>
    </div>
  )
}

export default Navbar
