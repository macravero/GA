import React, {createContext, useState, useContext } from 'react'


export const DataContext = createContext();


export const useDataContext = () => useContext(DataContext);

const DataProvider = (props) => {
  const [darkMode, showDarkMode] = useState(false);
  const [displayDarkMode, setDisplayDarkMode] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontColor, setFontColor] = useState('');
  const [fontFamily, setFontFamily] = useState('');
  const [DMbackground, setDMbackground] = useState('');
  const [cursor,setCursor] = useState('');
  return (
    <DataContext.Provider
      value={{
        darkMode,
        showDarkMode,
        displayDarkMode,
        setDisplayDarkMode,
        isDarkMode,
        setIsDarkMode,
        fontColor,
        setFontColor,
        fontFamily,
        setFontFamily,
        DMbackground,
        setDMbackground,
        cursor,
        setCursor,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
