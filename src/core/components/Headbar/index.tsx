import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Headbar = () => (
    <header className="headbar">
        <Link 
            to="/"
            className="headbar-title"
        >
            Bootcamp DevSuperior
        </Link>
    </header>
);

export default Headbar;