import React, {createContext, useState, useContext } from 'react'


export const ViewsContext = createContext();


export const useViewsContext = () => useContext(ViewsContext);

const ViewsProvider = (props) => {

  const [pos, setPos] = useState(1)
  const [homeVisited, setHomeVisited] = useState(false);
  const [fontColor, setFontColor] = useState('white')
  const [movieHacked, setMovieHacked] = useState(false);
  const [ampliada, setAmpliada] = useState(false);
  return (
    <ViewsContext.Provider
      value={{
        pos,
        setPos,
        fontColor,
        setFontColor,
        movieHacked,
        setMovieHacked,
        ampliada,
        setAmpliada,
        homeVisited,
        setHomeVisited
      }}
    >
      {props.children}
    </ViewsContext.Provider>
  );
}

export default ViewsProvider;
