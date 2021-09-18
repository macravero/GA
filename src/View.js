import React, {useState} from 'react'
import './View.css'
import Home from './components/Home/Home'
import Brains from './components/Brains/Brains'
import Data from './components/Data/Data'
import Reproductor from './components/Reproductor/Reproductor'
import {useViewsContext} from './context/ViewsContext/ViewsContext'
import DataProvider from './context/DataContext/DataContext';
import FirstErrorGif from './media/Home/1.gif'

const View = props => {
  
  const [overlayStatus, setOverlayStatus] = useState({
    gif: FirstErrorGif,
    shows: false
  })
  const updateOverlayGif = (shows, gif) =>{
    setOverlayStatus({
      gif: gif ? gif : overlayStatus.gif,
      shows: shows
    })
  }
  const { pos, setFontColor, homeVisited, setHomeVisited, viewBackground} = useViewsContext();
  const updateView = pos => {
    switch (pos) {
      case 0:
        setFontColor('white')
        return <Home visited={homeVisited} setVisited={setHomeVisited} updateOverlayGif={updateOverlayGif}></Home>
      case 1:
        setFontColor('white')
        return <Brains></Brains>
      case 2:
        setFontColor('white')
        return <Data></Data>
      case 3:
        return <Reproductor></Reproductor>
      default:
        return <div className="View" ><div>Something broke...</div></div>
    }
  }
  return (
    <DataProvider>
      <img src={overlayStatus.gif} className="overlayGif" style={{display: overlayStatus.shows ? 'block' : 'none'}}/>
      <div className="View" style={{backgroundImage: viewBackground, backgroundSize: 'cover'}}>
        {updateView(pos)}
      </div>
    </DataProvider>
  )
}

export default View
