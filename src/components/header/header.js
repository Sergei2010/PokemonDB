import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h1>
                <Link to='/'>
                    Pokemon DB
                </Link>
            </h1>
            <ul className="d-flex">
                <li>
                    <Link to='/types'>Types</Link>
                </li>
                <li>
                    <Link to='Subtypes'>Subtypes</Link>
                </li>
                <li>
                    <Link to='/exit'>Exit</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;