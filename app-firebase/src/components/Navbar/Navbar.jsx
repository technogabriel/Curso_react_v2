import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export const Navbar = () => {

    const { user } = useAuth()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link className='nav-link' to='/'>Home</Link>
                            {user && <Link className='nav-link' to='/profile'>Mi perfil</Link>}
                            {!user && <Link className='nav-link' to='/login'>Iniciar Sesion</Link>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}




