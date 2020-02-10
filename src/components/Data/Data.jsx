import React, { useState } from 'react'
import img01 from '../../media/Data/01.png'
import img02 from '../../media/Data/02.gif'
import img03 from '../../media/Data/03.jpg'
import img04 from '../../media/Data/04.jpg'
import img05 from '../../media/Data/05.jpg'
import img06 from '../../media/Data/06.jpg'
import img07 from '../../media/Data/07.jpg'
import './Data.css'
import Critics from '../Critics/Critics'
import Backend from '../Backend/Backend'
import Endgame from '../Endgame/Endgame'

function Data() {
  const [dataSelected, SetDataSelected] = useState(0)

  const [hideItemOne, SetHideItemOne] = useState(false)
  const [hideItemTwo, SetHideItemTwo] = useState(false)
  const [hideItemThree, SetHideItemThree] = useState(false)
  const [hideItemFour, SetHideItemFour] = useState(false)
  const [hideItemFive, SetHideItemFive] = useState(false)
  const [hideItemSix, SetHideItemSix] = useState(false)
  const [hideItemSeven, SetHideItemSeven] = useState(false)

  const showDataItem = () => {
    switch (dataSelected) {
      default:
        return <div className='DataIntro'><p><strong>_Generación artiﬁcial</strong> es un proyecto transmedia conformado por una película, una performance audiovisual con redes neuronales y un juego de realidad alternada que comienza con esta web.</p></div>
      case 1:
        return <div className='DataOne'><p><strong>_Generación Artificial</strong> es una mirada subjetiva sobre la historia de los Video Jockeys, con un énfasis nostálgico en la relación entre arte y tecnología. De la mano de un VJ pionero que busca hackear el cerebro, el director de esta película se interna en el laberinto de una discusión metafísica sobre los límites de la experimentación, el artista y su público, y la videorrealidad como futuro de la especie humana.<br /><br /><strong>_Generación Artificial</strong> utilizó para su realización: diapositivas, Super 8, 8 mm., VHS, SVHS, HI8, Mini DV, DV cam, HD, 2K, cámaras de seguridad y sintetizadores y mixers de video analógico.</p></div>
      case 2:
        return <div className='DataTwo'><p><strong>Director:</strong> Federico Pintos<br /><strong>Guión:</strong> Julián Urman, Federico Pintos<br /><strong>Edición:</strong> Ian Kornfeld, Federico Pintos</p>
          <p><strong>Intérpretes:</strong> Rafael Cippolini, Julián Urman, Lulú Jankilevich<br /> <strong>Visuales:</strong> Marcelo Rondinone, Alejandro Delgado, Bernie Heredia, Milena Pafundi, Sebastián Iannizzotto, José Render, Federico Lamas, Ian Kornfeld, DataRape, Interno Subjetivo.<br /> <strong>Canciones:</strong> Julián Aznar, Fantasías Animadas, Ulises Conti, Juan Stewart, Trasvorder, Zort, Emilio Haro/Wenchi Lazo<br /> <strong>Entrevistas:</strong> Marcelo Urresti, Mariano Sigman, Graciela Taquini, Iván Ivanoff.</p>
          <p><strong>Dirección de fotografía y cámara:</strong> Leonardo val<br /><strong>Fotografías:</strong> Luis sens <br /><strong>Posproducción & Música original:</strong> Ian kornfeld<br /><strong>Dirección de sonido:</strong> Emiliano biaiñ <br /><strong>Arte:</strong> Marina Azul Fernández Besada<br /> <strong>Diseño de Títulos:</strong> Javier Plano<br /> <strong>Diseño gráﬁco:</strong> Ian Kornfeld<br /> <strong>Dirección de producción:</strong> Andy Piffer <br /><strong>Producción:</strong> Federico Pintos Julián Urman, Matías Tamborenea, Iván Granovsky, Martín Maisonave</p></div>
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
          return <div className='DataFive'><p><strong>_El Brain’s Cut</strong> de Generación Artificial es una experiencia audiovisual única que explora el contacto entre cine, neurociencia, música experimental, performance y VJing.<br/><br/>  Se estrenó en Octubre del 2017 en el C3 (Centro Cultural de la Ciencia) en el marco del MICA (Mercado de Industrias Creativas Argentinas)<br/><br/>Una creación Kerlleñevich, Riera & Pintos</p></div>
        case 6:
          return <div className='DataSix'><div className='teamText'><p>Dirección: Federico Pintos<br/> Programación: Pablo Riera & Mathias Gatti <br/>Sonido: Hernán Kerlleñevich <br/> Video: Javier Plano & Mateo Amaral <br/> Producción & Montaje de obra: Julián Urman & Kevin Herzog <br/> Iluminación: Leonardo Val <br/> Diseño: Ian Kornfeld <br/> Asistente: Eliana Rosales<br/> <br/>Se estrenó como acto central del MICA (Mercado de Industrias Creativas Argentinas) en el C3, Centro Cultural de la Ciencia.</p></div>
          <div className='teamImage'/>
          </div>
        case 7:
          return <Backend></Backend>
        case 8:
          return <Endgame></Endgame>
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
        return 'Data TeamBG'
      case 7:
        return 'Data BlueBG'
    }
  }
  return (
    <div className={setDataBackground()}>
      <div className="leftContainer">
        <h1 className="dataTitle">Data<sup>(3)</sup></h1>
        <div className="linksContainer">
          <ul>
            <li className={dataSelected === 1 && 'active'} onClick={() => SetDataSelected(1)}><span className="numeration">1</span>La Película</li>
            <li className={dataSelected === 2 && 'active'} onClick={() => SetDataSelected(2)}><span className="numeration">2</span>Créditos</li>
            <li className={dataSelected === 3 && 'active'} onClick={() => SetDataSelected(3)}><span className="numeration">3</span>Proyecciones</li>
            <li className={dataSelected === 4 && 'active'} onClick={() => SetDataSelected(4)}><span className="numeration">4</span>Criticas</li>
            <li id="darkMode"><span className="numeration">0</span>Dark Mode</li>
          </ul>
          <ul>
            <li className={dataSelected === 5 && 'active'} onClick={() => SetDataSelected(5)}><span className="numeration">5</span>Brain's Cut</li>
            <li className={dataSelected === 6 && 'active'} onClick={() => SetDataSelected(6)}><span className="numeration">6</span>El Equipo</li>
            <li className={dataSelected === 7 && 'active'} onClick={() => SetDataSelected(7)}><span className="numeration">7</span>Back-END</li>
            <li className={dataSelected === 8 && 'active'} onClick={() => SetDataSelected(8)}><span className="numeration">8</span>Última Fase</li>
          </ul>
        </div>
      </div>
      <div className="rightContainer">
        {showDataItem()}
        {dataSelected === 1 &&
          <div>
            <div className={"item itemTwo " + (hideItemTwo && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemTwo(true)}></div>
              <img src={img02} alt="Clouds" />
            </div>
            <div className={"item itemThree " + (hideItemThree && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemThree(true)}></div>
              <img src={img03} alt="Thunder" />
            </div>
            <div className={"item itemFour " + (hideItemFour && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemFour(true)}></div>
              <img src={img04} alt="Balloons" />
            </div>
            <div className={"item itemFive " + (hideItemFive && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemFive(true)}></div>
              <img src={img05} alt="Palms" />
            </div>
            <div className={"item itemSix " + (hideItemSix && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemSix(true)}></div>
              <img src={img06} alt="Sea Worlds" />
            </div>
            <div className={"item itemSeven " + (hideItemSeven && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemSeven(true)}></div>
              <img src={img07} alt="Flower" />
            </div>
            <div className={"item itemOne " + (hideItemOne && 'hidden')}>
              <div className="closeLink" onClick={() => SetHideItemOne(true)}></div>
              <img src={img01} />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Data
