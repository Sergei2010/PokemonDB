import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h1>
                <a href="#/">
                    Pokemon DB
                </a>
            </h1>
            <ul className="d-flex">
                <li>
                    <a href="#/">Exit</a>
                </li>
                <li>
                    <a href="#/">Types</a>
                </li>
                <li>
                    <a href="#/">Subtypes</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;