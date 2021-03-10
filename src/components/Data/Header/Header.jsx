import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Header.css'
const Header = () => {
  const Animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700, })
  return (
    <animated.header style={Animation} className="Header">
          <div className="header-top">
            <div className="left-side">
            <div>
              <p>08:25:12p</p>
            </div>
            <div>
              <p>Ref:63</p>
            </div>
            <div>
              <p>Mem:0156AC6600</p>
            </div>
          </div>
            <div className="center-side">
              <div><p>CPU25 1 1 1 1 1 1 1 01 1 0</p></div>
            </div>
          </div>
          <div className="header-mid">
              <div>
                <p>D:/GA/Acc</p>
                <p>named Task...</p>
              </div>
            </div>
    </animated.header>
  )
}

export default Header
