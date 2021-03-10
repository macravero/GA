import React from 'react'
import Home from './components/Home/Home'
import Brains from './components/Brains/Brains'
import Data from './components/Data/Data'
import Reproductor from './components/Reproductor/Reproductor'
import {useViewsContext} from './context/ViewsContext/ViewsContext'
import DataProvider from './context/DataContext/DataContext';

const View = props => {
  const { pos, setFontColor, homeVisited, setHomeVisited } = useViewsContext();
  const updateView = pos => {
    switch (pos) {
      case 0:
        setFontColor('white')
        return <Home visited={homeVisited} setVisited={setHomeVisited}></Home>
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
      <div className="View">
        {updateView(pos)}
      </div>
    </DataProvider>
  )
}

export default View
