import React, { useState } from 'react';
import './componentStyles.css';
import { NavLink } from 'react-router-dom';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {menuOpen ? (
          <img src={closeIcon} alt="Cerrar menú" className="menu-icon" />
        ) : (
          <img src={menuIcon} alt="Abrir menú" className="menu-icon" />
        )}
      </button>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
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