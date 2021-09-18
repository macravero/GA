import React, {createContext, useState, useContext } from 'react'
import Warning from '../../media/Home/advertencia.PNG'


export const HomeHackContext = createContext();


export const useHomeHackContext = () => useContext(HomeHackContext);

const HomeHackProvider = (props) => {
    const [textContent, setTextContent] = useState('POR FAVOR, NO CLICKEE AQUÍ')
    const [currentHackState, setCurrentHackState] = useState(0)
    const [currentMessage, setCurrentMessage] = useState({img:Warning, display: true})
    const [isClickable, setIsClickable] = useState(false)
  return (
    <HomeHackContext.Provider
      value={{
        textContent,
        setTextContent,
        currentHackState,
        setCurrentHackState,
        currentMessage,
        setCurrentMessage,
        isClickable,
        setIsClickable,
      }}
    >
      {props.children}
    </HomeHackContext.Provider>
  );
}

export default HomeHackProvider;
