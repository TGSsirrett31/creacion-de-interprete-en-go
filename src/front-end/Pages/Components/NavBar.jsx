import React from "react";
import '../../App.css';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar-header">
                <h2>Creación de intérprete en Go</h2>
            </div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink to="/guide" end className="navbar-link" activeClassName="active">
                        Guía
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/guide/helloworldingo" className="navbar-link" activeClassName="active">
                        Hello World in Go (Golang)
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/guide/start" className="navbar-link" activeClassName="active">
                        Starting to Dev
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;
