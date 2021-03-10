import React from 'react'
import {useViewsContext} from '../../context/ViewsContext/ViewsContext';
import './Footer.css'

function Footer() {

  const { pos, setPos, fontColor, ampliada } = useViewsContext();

  const setupReproductor = () =>{
    if (pos !== 3) return 'Footer';
    return ampliada ? 'Footer Movie Hacked' : 'Footer Movie'
  };
  return (
    <div className={setupReproductor()}>
      <div className='marquee'>
        <h1 style={{ color: fontColor }} className='firstMarquee'><span onClick={() => setPos(0)}>GENERACION ARTIFICIAL<sup>(1)</sup></span> &nbsp;&nbsp; <span onClick={() => setPos(1)}>BRAIN'S CUT<sup>(2)</sup></span> &nbsp;&nbsp; <span onClick={() => setPos(2)}>DATA<sup>(3)</sup></span> &nbsp;&nbsp;<span onClick={() => setPos(0)}>GENERACION ARTIFICIAL<sup>(1)</sup></span> &nbsp;&nbsp; <span onClick={() => setPos(1)}>BRAIN'S CUT<sup>(2)</sup></span> &nbsp;&nbsp; <span onClick={() => setPos(2)}>DATA<sup>(3)</sup></span> &nbsp;&nbsp;</h1>
        <h1 style={{ color: fontColor }} className='secondMarquee'><span onClick={() => setPos(0)}>GENERACION ARTIFICIAL<sup>(1)</sup></span> &nbsp;&nbsp; <span onClick={() => setPos(1)}>BRAIN'S CUT<sup>(2)</sup></span> &nbsp;&nbsp; <span onClick={() => setPos(2)}>DATA<sup>(3)</sup></span> &nbsp;&nbsp;<span onClick={() => setPos(0)}>GENERACION ARTIFICIAL<sup>(1)</sup></span> &nbsp;&nbsp; <span onClick={() => setPos(1)}>BRAIN'S CUT<sup>(2)</sup></span> &nbsp;&nbsp; <span onClick={() => setPos(2)}>DATA<sup>(3)</sup></span> &nbsp;&nbsp;</h1>
      </div>
    </div>
  )
}

export default Footer
