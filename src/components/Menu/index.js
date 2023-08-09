import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Logo da Aluraflix"/>
            </Link>

            <ButtonLink className="ButtonLink" to="/cadastro/videos">Novo vídeo</ButtonLink>
        </nav>
    );
}

export default Menu;