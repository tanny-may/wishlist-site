import React from 'react';

function Navigation(props) {
    return (
        <nav className="menu">
            <ul className='nav-ul'>
                {props.pages.map(el => <li key={el} onClick={props.handlerSetPage} className='nav-li'><a href='/#' className={props.currentPage === el.toLowerCase() ? 'nav-a activeMenu' : 'nav-a'}>{el}</a></li>)}
            </ul>
        </nav>
    );
}

export default Navigation;