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
                    <Link to='/private/types'>Types</Link>
                </li>
                <li>
                    <Link to='/private/subtypes'>Subtypes</Link>
                </li>
                <li>
                    <Link to='/public'>Exit</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;