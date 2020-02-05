import React from 'react'
import Home from './components/Home/Home'
import Brains from './components/Brains/Brains'
import Data from './components/Data/Data'
import Reproductor from './components/Reproductor/Reproductor'
const View = props => {
  const { pos } = props
  const updateView = pos => {
    switch (pos) {
      case 0:
        props.setFontColor('white')
        return <Home></Home>
      case 1:
        props.setFontColor('white')
        return <Brains></Brains>
      case 2:
        props.setFontColor('white')
        return <Data></Data>
      case 3:
        return <Reproductor setFontColor={props.setFontColor}></Reproductor>
      default:
        return <div className="View" ><div>Something broke...</div></div>
    }
  }
  return (
    <div className="View">
      {updateView(pos)}
    </div>
  )
}

export default View
