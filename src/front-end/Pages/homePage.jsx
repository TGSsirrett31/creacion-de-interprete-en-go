import React from 'react';
import '../App.css';
import githubImg from '../assets/github.svg';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home">
            <h1>Creación de un intérprete en Go</h1>
            <p>Esta pequeña guía se va a centrar en desarrollar un intérprete en Golang. La guía tendrá varios episodios y está hecha para que sea lo más fácil y comprensible posible, y que todos los públicos la puedan entender.</p>
            <div className="buttons">
                <Link to="/guide" className="button">Guía</Link>
                <a href="https://github.com/TGSsirrett31/creacion-de-interprete-en-go" className="button" target='_blank'>
                    <img src={githubImg} alt="GitHub" className='logo'/> GitHub
                </a>
            </div>
        </div>
    );
}

export default HomePage;