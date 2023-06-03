import React, { createContext, useState } from 'react'

//creamos el contexto del tema:
export const themeContext = createContext('')


//componente proveedor de contexto:
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)

    //funcion para cambiar tema:
    const toggleTheme = () => {
        setTheme(!theme)
    }

    //Valor que sera proporcionado a los componentes
    const contextValue = {
        theme,
        toggleTheme
    }

    return (
        <themeContext.Provider value={contextValue}>
            {children}
        </themeContext.Provider>

    )
}

export default ThemeProvider