import React, { useState } from 'react';
import imagePreloader from '../shared/ImageLoader/imageLoader'
import './Intro.css'
function Intro(props) {
  imagePreloader();
  const { counter, setCounter } = props
  const [isClicking, setClicking] = useState(false)

  const updateCounter = e => {
    if (counter >= 3) {
      setTimeout(() => {
        setCounter(5)
      }, 3000)
    }
    e.preventDefault()
    setCounter(prevCounter => (prevCounter + 1))
  }
  const updateClicking = () => {
    setClicking(prevClick => (!prevClick))
  }
  return (
    <div className={`Intro bg${counter} ${isClicking ? `clicked${counter}` : ''}`} onClick={updateCounter} onMouseDown={updateClicking} onMouseUp={updateClicking}>
    </div>
  )
}

export default Intro
