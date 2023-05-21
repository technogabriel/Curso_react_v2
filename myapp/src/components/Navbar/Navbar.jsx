import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiCartDownload} from 'react-icons/bi'


export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link w-20" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/counter">Counter</NavLink>
                        <NavLink className="nav-link" to="/form">Form</NavLink>
                       
                    </div>
                </div>
            </div>
            <span className='d-flex-row justify-content-end' >
                <NavLink className="nav-link " to="/cart"><BiCartDownload size={35}/></NavLink>
            </span>
        </nav>
        
    )
}
