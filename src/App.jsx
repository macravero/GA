import React, { useState } from 'react';
import View from './View'
import Intro from './components/Intro/Intro'
import Footer from './components/Footer/Footer'

import './App.css';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  const [counter, setCounter] = useState(0)
  const [pos, setPos] = useState(2)
  const [fontColor, setFontColor] = useState('white')


  return (
    <div className="App">
      {(counter < 5) && <Intro counter={counter} setCounter={setCounter} />}
      {(counter >= 5) && <Navbar setPos={setPos} pos={pos} fontColor={fontColor} />}
      {(counter >= 5) && <View pos={pos} setPos={setPos} setFontColor={setFontColor} fontColor={fontColor} />}
      {(counter >= 5) && <Footer setPos={setPos} fontColor={fontColor} />}
    </div>
  );
}

export default App;
