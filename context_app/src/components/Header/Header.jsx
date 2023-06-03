import React, { useContext } from 'react'
import './header.css'
import { themeContext } from '../context/ThemeContext'

export const Header = () => {
    const { theme, toggleTheme } = useContext(themeContext)

    const handleToogleTheme = () => {
        toggleTheme(theme)
        console.log(theme)
    }
    return (
        <><h1>Aplicacion de Temas</h1>
        <header>
            <nav className={theme ? 'navbar' : 'navchange'}>
                <a href="#">Logo</a>
                <a href="#">Inicio </a>
                <a href="#">Contacto</a>
                <a href="#">Nosotros</a>
                <a href="#">Ubicacion</a>
                <button className='btn btn-success' onClick={handleToogleTheme}>Cambiar tema</button>
            </nav>

        </header>
        </>

    )
}
