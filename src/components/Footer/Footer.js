import React from 'react'
import './Footer.css'

function Footer(props) {
  return (
    <div className='Footer'>
      <div className="marquee">
        <h1 style={{ color: props.fontColor }} className='firstMarquee'><span onClick={() => props.setPos(0)}>GENERACION ARTIFICIAL<sup>(1)</sup></span> &nbsp;&nbsp; <span onClick={() => props.setPos(1)}>BRAIN'S CUT<sup>(2)</sup></span> &nbsp;&nbsp; <span onClick={() => props.setPos(2)}>DATA<sup>(3)</sup></span> &nbsp;&nbsp;<span onClick={() => props.setPos(0)}>GENERACION ARTIFICIAL<sup>(1)</sup></span> &nbsp;&nbsp; <span onClick={() => props.setPos(1)}>BRAIN'S CUT<sup>(2)</sup></span> &nbsp;&nbsp; <span onClick={() => props.setPos(2)}>DATA<sup>(3)</sup></span> &nbsp;&nbsp;</h1>
        <h1 style={{ color: props.fontColor }} className='secondMarquee'><span onClick={() => props.setPos(0)}>GENERACION ARTIFICIAL<sup>(1)</sup></span> &nbsp;&nbsp; <span onClick={() => props.setPos(1)}>BRAIN'S CUT<sup>(2)</sup></span> &nbsp;&nbsp; <span onClick={() => props.setPos(2)}>DATA<sup>(3)</sup></span> &nbsp;&nbsp;<span onClick={() => props.setPos(0)}>GENERACION ARTIFICIAL<sup>(1)</sup></span> &nbsp;&nbsp; <span onClick={() => props.setPos(1)}>BRAIN'S CUT<sup>(2)</sup></span> &nbsp;&nbsp; <span onClick={() => props.setPos(2)}>DATA<sup>(3)</sup></span> &nbsp;&nbsp;</h1>
      </div>
    </div>
  )
}

export default Footer
