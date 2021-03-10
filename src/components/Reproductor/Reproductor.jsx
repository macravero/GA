/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import { useSpring, animated } from 'react-spring'
import positiveReview1 from '../../media/Reproductor/good-review1.png'
import positiveReview2 from '../../media/Reproductor/good-review2.png'
import positiveReview3 from '../../media/Reproductor/good-review3.png'
import negativeReview1 from '../../media/Reproductor/bad-review1.png'
import negativeReview2 from '../../media/Reproductor/bad-review2.png'
import negativeReview3 from '../../media/Reproductor/bad-review3.png'
import './Reproductor.css'
import {useViewsContext} from '../../context/ViewsContext/ViewsContext';

function Reproductor() {
  const [currentTime, setCurrentTime] = useState(0);
  const {setFontColor, movieHacked, setMovieHacked, ampliada, setAmpliada} = useViewsContext();
  const buttonAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 16500, })
  setFontColor('black')
  const positive = ['"Una mirada punzante sobre el arte contemporáneo"', 'Luis Paz, Página/12', '"El virus entró al sistema“', 'Diego Erlan, Revista Ñ, Clarín', '“Un film tan exótico como cautivante”', 'Alejandro Lingenti, La Nación', '"Un juego sobre la ontología de la imagen y el concepto de verdad en la era digital"', 'Diego Lerer, Micropsia/Otros Cines', positiveReview1,positiveReview2, positiveReview3]
  const negative = ['“¿Qué VJs? ¿Los de MTV?"', 'La mayoría de la gente.', '“¿Por qué no tiene más partes documentales?"', 'Algunos amantes del cine documental.', '“¿Por qué no tiene más partes de ficción?"', 'Algunos amantes del cine de ficción.', '“Esta versión ampliada me hace acordar a los extras de un DVD”', 'Alguien que miraba muchos DVDs.', '“¿Qué es un DVD?”', 'La gente joven.', negativeReview1, negativeReview2, negativeReview3]
  ampliada && setFontColor('white')
  const setExtendedVersion = () => {
    setMovieHacked(true)
    setTimeout(() => {
    setAmpliada(true);
    setMovieHacked(false);
    },1000)
  }    
  useEffect(() => {
    return () => {
        setAmpliada(false)
    }
  }, [])
  useEffect(() => {
    return () => clearInterval(videoPlayTimeInterval);
  });
  const opts={
    height: '390',
    width: '640',
    playerVars: {
      controls: 1,
      autoplay: 0,
      showinfo: 0,
      frameborder: 0,
    }
  }
  let videoPlayTimeInterval
  const onPlayVideo = e =>{
    videoPlayTimeInterval = setInterval(()=>console.log(e.target.getCurrentTime()),1000);
  }
  const onPauseVideo = () =>{
    clearInterval(videoPlayTimeInterval);
  }
  return (
    <div className={ampliada ? 'Reproductor ampliado' : 'Reproductor'}>
      <div className={movieHacked ? "movieContainer hacked" : "movieContainer" + (ampliada ? " ampliada" : '')}>
        <YouTube 
          className='movie'
          videoId="FQNnoQLkMyo"
          opts={opts}
          onPlay={onPlayVideo}
          onPause={onPauseVideo}
          >
        </YouTube>
      </div>
      <div className="criticsContainer" style={ampliada ? {backgroundColor: 'black'} : null}>
        <div className={movieHacked ? "firstMarquee hacked" : "firstMarquee" + (ampliada ? " ampliada" : '')}>
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
          <h2>PREMIOS</h2>
          <div className="critica">
            <img className="criticaImage" src={ampliada ? negative[10] : positive[8]} alt=""/>
          </div>
          <div className="critica">
            <img className="criticaImage" src={ampliada ? negative[11] : positive[9]} alt=""/>
          </div>
          <div className="critica">
            <img className="criticaImage" src={ampliada ? negative[12] : positive[10]} alt=""/>
          </div>
        </div>
        <div className={ movieHacked ? "secondMarquee hacked" : "secondMarquee" + (ampliada ? " ampliada" : '')}>
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
          <h2>PREMIOS</h2>
          <div className="critica">
            <img className="criticaImage" src={ampliada ? negative[10] : positive[8]} alt=""/>
          </div>
          <div className="critica">
            <img className="criticaImage" src={ampliada ? negative[11] : positive[9]} alt=""/>
          </div>
          <div className="critica">
            <img className="criticaImage" src={ampliada ? negative[12] : positive[10]} alt=""/>
          </div>
        </div>
      </div>
      
      <animated.div style={buttonAnimation} onClick={setExtendedVersion} className={ampliada ? 'hackButton hide' : 'hackButton'}>JAQUEAR</animated.div>
    </div>
  )
}

export default Reproductor
