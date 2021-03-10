/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import img01 from '../../media/Brains/blackhole.gif'
import img02 from '../../media/Data/02.gif'
import img03 from '../../media/Data/03.jpg'
import img04 from '../../media/Data/04.jpg'
import img05 from '../../media/Data/05.jpg'
import img06 from '../../media/Data/06.jpg'
import img07 from '../../media/Data/07.gif'
import './Data.css'
import Credits from './Credits/Credits'
import CreditImages from './Credits/CreditImages'
import Critics from './Critics/Critics'
import Backend from './Backend/Backend'
import Endgame from './Endgame/Endgame'
import Header from './Header/Header'
import Darkmode from './Darkmode/Darkmode'
import { useDataContext } from '../../context/DataContext/DataContext';

function Data() {
  
  const buttonAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 2000 })
  const item1Animation = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 200 })
  const item2Animation = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 500 })
  const item3Animation = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 800 })
  const item4Animation = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 1100 })
  const item5Animation = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 1400})
  const item6Animation = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 1700 })
  const item7Animation = useSpring({ opacity: 1, from: { opacity: 0 }, duration: 2000 })
  const { 
    darkMode,
    showDarkMode,
    displayDarkMode,
    setDisplayDarkMode,
    isDarkMode,
    setIsDarkMode,
    fontColor,
    fontFamily,
    DMbackground,
    cursor,} = useDataContext();

  const [dataSelected, SetDataSelected] = useState(0)

  const [hideItemOne, SetHideItemOne] = useState(false)
  const [hideItemTwo, SetHideItemTwo] = useState(false)
  const [hideItemThree, SetHideItemThree] = useState(false)
  const [hideItemFour, SetHideItemFour] = useState(false)
  const [hideItemFive, SetHideItemFive] = useState(false)
  const [hideItemSix, SetHideItemSix] = useState(false)
  const [hideItemSeven, SetHideItemSeven] = useState(false)
  const [hideTeam, setHideTeam] = useState(false)
  const [hideTeamImage, setHideTeamImage] = useState(false)
  const activateDarkMode = () =>{
    setDisplayDarkMode(true)
    setIsDarkMode(true)
  }    
  useEffect(() => {
    return () => {
        setIsDarkMode(false)
    }
  }, [])

  const showDataItem = () => {
    switch (dataSelected) {
      default:
        return <div className='DataIntro'><p><strong>_Generación artiﬁcial</strong> es un proyecto transmedia conformado por una película, una performance audiovisual con redes neuronales y un juego de realidad alternada que comienza con esta web.</p></div>
      case 1:
        return <div className='DataOne'><p><strong>_Generación Artificial</strong> es una mirada subjetiva sobre la historia de los Video Jockeys, con un énfasis nostálgico en la relación entre arte y tecnología. De la mano de un VJ pionero que busca hackear el cerebro, el director de esta película se interna en el laberinto de una discusión metafísica sobre los límites de la experimentación, el artista y su público, y la videorrealidad como futuro de la especie humana.<br /><br /><strong>_Generación Artificial</strong> utilizó para su realización: diapositivas, Super 8, 8 mm., VHS, SVHS, HI8, Mini DV, DV cam, HD, 2K, cámaras de seguridad y sintetizadores y mixers de video analógico.</p></div>
      case 2:
        return (<><Credits/><CreditImages/></>)
      case 3:
        return <div className='DataThree'><p className='proyeccion'>BAFICI</p>
          <p className='proyeccion'>MALBA (Museo de Arte Latinoamericano) Palais de Glace<br /></p>
          <p className='proyeccion'>Centro Cultural Recoleta<br /></p>
          <p className='proyeccion'> Museo del Cine<br /></p>
          <p className='proyeccion'>Festival de cine de la Habana<br /></p>
          <p className='proyeccion'>Festifreak<br /></p>
          <p className='proyeccion'>BAFICI Mendoza<br /></p>
          <p className='proyeccion'>BAFICI Rosario<br /></p>
          <p className='proyeccion'>Marfici<br /></p>
          <p className='proyeccion'>Museo MAR<br /></p>
          <p className='proyeccion'>FECILBBA<br /></p>
          <p className='proyeccion'>Centro Cultural de la Ciencia<br /></p>
          <p className='proyeccion'>Play, Semana de Videoarte<br /></p>
          <p className='proyeccion'>FIVA<br /></p>
          <p className='proyeccion'>Biblioteca Nacional<br /></p>
          <p className='proyeccion'>Es Baluard Museu d'Art Modern i Contemporani de Palma (España)<br /></p>
          <p className='proyeccion'>Dulces Trópicos (Perú)<br /></p>
          <p className='proyeccion'>Filmoteca de Andalucía<br /></p>
          <p className='proyeccion'>La Casa Encendida (Madrid)<br /></p>
          <p className='proyeccion'> Harinera (Zaragoza)<br /></p>
          <p className='proyeccion'>Centro Cultural de España (Chile) Zumzeig (Barcelona)<br /></p>
          <p className='proyeccion'> Márgenes<br /></p>
          <p className='proyeccion'>Pirámide<br /></p>
          <p className='proyeccion'>Cinemateca Uruguaya<br /></p>
          <p className='proyeccion'>La Casa del Cine (México DF)<br /></p>
          <p className='proyeccion'>Centro de Cultura Digital (México DF Festival Lumínica<br /></p>
          <p className='proyeccion'>Lateinamerikanische Tage (Leipzig, Alemania)<br /></p>
          <p className='proyeccion'>Festival Piriápolis de película (Uruguay)<br /></p>
          <p className='proyeccion'>Club Cultural Matienzo<br /></p>
          <p className='proyeccion'>Comunidad Contempo<br /></p>
          <p className='proyeccion'>Zona Futuro<br /></p>
          <p className='proyeccion'>Casa Yakuzi<br /></p>
          <p className='proyeccion'>Congreso Futuro (Chile)<br /></p>
          <p className='proyeccion'>Festival de la Imagen (Colombia)</p>
        </div>
        case 4:
          return <Critics></Critics>
        case 5:
          return <div className='DataFive'><p><strong>_El Brain’s Cut</strong> de Generación Artificial es una experiencia audiovisual única que explora el contacto entre cine, neurociencia, música experimental, performance y VJing.<br/><br/>  Se estrenó en Octubre del 2017 en el C3 (Centro Cultural de la Ciencia) en el marco del MICA (Mercado de Industrias Creativas Argentinas)<br/><br/>Una creación Kerlleñevich, Riera & Pintos</p>
          {!hideTeam && <div className='teamText'><p>Dirección: Federico Pintos<br/> Programación: Pablo Riera & Mathias Gatti <br/>Sonido: Hernán Kerlleñevich <br/> Video: Javier Plano & Mateo Amaral <br/> Producción & Montaje de obra: Julián Urman & Kevin Herzog <br/> Iluminación: Leonardo Val <br/> Diseño: Ian Kornfeld <br/> Asistente: Eliana Rosales<br/> <br/>Se estrenó como acto central del MICA (Mercado de Industrias Creativas Argentinas) en el C3, Centro Cultural de la Ciencia.</p><span onClick={()=> setHideTeam(true)}>[ x ]</span></div>}
          {!hideTeamImage && <div className='teamImage'>
            <span className='closeTeamImage' onClick={()=> setHideTeamImage(true)}>[ x ]</span>
            <a href='https://www.instagram.com/javierplano_videonix/' target='_blank' rel='noopener noreferrer' title='Javier Plano'><span className='javier link'></span></a>
            <a href='https://www.instagram.com/elianitable/' target='_blank' rel='noopener noreferrer' title='Eliana Rosales'><span className='eliana  link'></span></a>
            <a href='https://www.instagram.com/kev.zog/' target='_blank' rel='noopener noreferrer' title='Kevin Herzog'><span className='kevin  link'></span></a>
            <a href='https://www.instagram.com/mathigatti/' target='_blank' rel='noopener noreferrer' title='Mathias Gatti'><span className='mathias  link'></span></a>
            <a href='https://www.instagram.com/rierayriase/' target='_blank' rel='noopener noreferrer' title='Pablo Riera'><span className='pablo  link'></span></a>
            <a href='https://www.instagram.com/val.leonardo/' target='_blank' rel='noopener noreferrer' title='Leonardo Val'><span className='leonardo  link'></span></a>
            <a href='https://www.instagram.com/mateoamaral/' target='_blank' rel='noopener noreferrer'title='Mateo Amaral'><span className='mateo  link'></span></a>
            <a href='https://www.instagram.com/hernan.kerllenevich/' target='_blank' rel='noopener noreferrer' title='Hernán Kerlleñevich'><span className='hernan  link'></span></a>
            <a href='https://www.instagram.com/rico_pintos/' target='_blank' rel='noopener noreferrer' title='Federico Pintos'><span className='federico  link'></span></a>
            <a href='https://www.instagram.com/urmanjulian/' target='_blank' rel='noopener noreferrer' title='Julián Urman'><span className='julian  link'></span></a>
          </div>}
          </div>
        case 6:
          return <Backend></Backend>
        case 7:
          return <Endgame showDarkMode={showDarkMode} isDarkMode={isDarkMode}></Endgame>
    }
  }
  const setDataBackground = () => {
    switch (dataSelected) {
      default:
        return 'Data'
      case 2:
        return 'Data GreenBG'
      case 3:
        return 'Data BlueBG'
      case 5:
        return 'Data BrainsBG'
      case 6:
        return 'Data BlueBG'
    }
  }
  const setHackedBg = () =>{
    if (isDarkMode){
    if (DMbackground === 'lascano'){
      return 'LascanoBg'
    }
    if (DMbackground === 'pintos'){
      return 'PintosBg'
    }
      return ''
  }
  };
  const setHackedCursor = () =>{
    if (isDarkMode){
    if (cursor === 'clickme'){
      return 'clickMeCursor'
    }
    if (cursor === 'flipped'){
      return 'flippedCursor'
    }
      return ''
  }
  };
  const setHackedFontFamily = () =>{
    if (isDarkMode){
      if (fontFamily === 'DOS'){
        return 'DOSfont'
      }
      if (fontFamily ==='GT'){
        return 'GTfont'
      }
  }
    return;
  }
  const setHackedFontColor = () =>{
    if (isDarkMode){
      if (fontColor === 'blood'){
        return 'BloodColor'
      }
      if (fontColor === 'dead'){
        return 'DeadColor'
      }
      return;
    }
  }
  return (
    <div className={`${setDataBackground()} ${setHackedCursor()} ${setHackedBg()} ${setHackedFontFamily()} ${setHackedFontColor()}`} >
      <Header/>
      <div className="leftContainer">
        <h1 className="dataTitle">Data<sup>(3)</sup></h1>
        <div className="linksContainer">
          <ul>
            <li className={dataSelected === 1 && 'active'} onClick={() => SetDataSelected(1)}><span className="numeration">1</span>La Película</li>
            <li className={dataSelected === 2 && 'active'} onClick={() => SetDataSelected(2)}><span className="numeration">2</span>Créditos</li>
            <li className={dataSelected === 3 && 'active'} onClick={() => SetDataSelected(3)}><span className="numeration">3</span>Proyecciones</li>
            <li className={dataSelected === 4 && 'active'} onClick={() => SetDataSelected(4)}><span className="numeration">4</span>Criticas</li>
            {darkMode && <animated.li style={buttonAnimation} onClick={activateDarkMode} id="darkMode"><span className="numeration">0</span>Dark Mode</animated.li>}
          </ul>
          <ul>
            <li className={dataSelected === 5 && 'active'} onClick={() => SetDataSelected(5)}><span className="numeration">5</span>Brain's Cut</li>
            <li className={dataSelected === 6 && 'active'} onClick={() => SetDataSelected(6)}><span className="numeration">6</span>El Equipo</li>
            <li className={dataSelected === 7 && 'active'} onClick={() => SetDataSelected(7)}><span className="numeration">7</span>Última Fase</li>
          </ul>
        </div>
      </div>
      <div className="rightContainer">
        {showDataItem()}
        {dataSelected === 1 &&
          <div>
            <animated.div style={item1Animation} className={"item itemTwo " + (hideItemTwo && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemTwo(true)}></div>
              <img src={img02} alt="Clouds" />
            </animated.div>
            <animated.div style={item2Animation}  className={"item itemThree " + (hideItemThree && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemThree(true)}></div>
              <img src={img03} alt="Thunder" />
            </animated.div>
            <animated.div style={item3Animation}  className={"item itemFour " + (hideItemFour && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemFour(true)}></div>
              <img src={img04} alt="Balloons" />
            </animated.div>
            <animated.div style={item4Animation}  className={"item itemFive " + (hideItemFive && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemFive(true)}></div>
              <img src={img05} alt="Palms" />
            </animated.div>
            <animated.div style={item5Animation}  className={"item itemSix " + (hideItemSix && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemSix(true)}></div>
              <img src={img06} alt="Sea Worlds" />
            </animated.div>
            <animated.div style={item6Animation}  className={"item itemSeven " + (hideItemSeven && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemSeven(true)}></div>
              <img src={img07} alt="Flower" />
            </animated.div>
            <animated.div style={item7Animation}  className={"item itemOne " + (hideItemOne && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemOne(true)}></div>
              <img src={img01} alt='Clouds'/>
            </animated.div>
          </div>
        }
      </div>
      {displayDarkMode && <Darkmode />}
    </div>
  )
}

export default Data
