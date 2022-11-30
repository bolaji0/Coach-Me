import React, { createContext,useState } from 'react'
import { ThemeProvider } from 'styled-components'
import MainRoute from './components/mainroute/MainRoute'
import { GlobalStyles } from './utils/GlobalStyles'
import { lightTheme,darkTheme } from './utils/themes'


const ThemeContext = createContext(null)

const App = () => {
  const [theme,setTheme] = useState('light') 
  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <ThemeProvider theme={themeStyles}>
        <GlobalStyles />
        <MainRoute />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App

