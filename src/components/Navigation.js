import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { choosePage, setCurrentPage } from '../store';

const pages = ['stickers', 'toys', 'pillows', 't-shirts', 'posters'];

function Navigation() {
    const page = useSelector((state) => state.common.page);
    const dispatch = useDispatch()

    return (
        <nav className="menu">
            <ul className='nav-ul'>
                {pages.map(el => 
                    <li 
                        key={el} 
                        onClick={() => {
                            dispatch(choosePage(el));
                            dispatch(setCurrentPage(1))
                        }}
                        className='nav-li'>
                            <a 
                                href='/#' 
                                className={page === el.toLowerCase() ? 'nav-a activeMenu' : 'nav-a'}>{el}
                            </a>
                    </li>)}
            </ul>
        </nav>
    );
}

export default Navigation;