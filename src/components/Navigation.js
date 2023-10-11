import React from 'react';

function Navigation(props) {
    return (
        <nav className="menu">
            <ul className='nav-ul'>
                <li className='nav-li'><a href="#" className='nav-a activeMenu'>Stickers</a></li>
                <li className='nav-li'><a href="#" className='nav-a'>Toys</a></li>
                <li className='nav-li'><a href="#" className='nav-a'>Pillows</a></li>
                <li className='nav-li'><a href="#" className='nav-a'>T-shirts</a></li>
                <li className='nav-li'><a href="#" className='nav-a'>Posters</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;