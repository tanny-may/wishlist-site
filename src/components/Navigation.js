import React from 'react';
import './Navigation.css';

function Navigation(props) {
    return (
        <nav className="menu">
            <ul>
                <li ><a href="#" className='activeMenu'>Stickers</a></li>
                <li><a href="#">Toys</a></li>
                <li><a href="#">Pillows</a></li>
                <li><a href="#">T-shirts</a></li>
                <li><a href="#">Posters</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;