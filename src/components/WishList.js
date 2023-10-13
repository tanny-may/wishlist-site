import React from 'react';
import {CardWishlist} from './Card';

function Wishlist({visible, setVisible, wishlist, setWishlist, deleteFromWishList}) {
    return (
        <div className='wishlist-div' style={{display: visible ? 'block' : 'none'}}>
            <div className='headerAndClose'>
                <h1 className='wishlist-h1'>My Wishlist</h1>
                <button className='wishlistClose' onClick={() => setVisible(false)}><span>❌</span></button>   
            </div>


            <div className='wishlistCards'>
                {wishlist.map(el => {
                    return <CardWishlist 
                        key={el.name} 
                        src={el.src} 
                        name={el.name} 
                        handleClick={deleteFromWishList(el)}
                        buttonText={'Delete'}
                        style={{backgroundColor: 'rgb(255, 203, 255)', color: "rgb(46, 30, 47)"}}
                    ></CardWishlist>
                })}    
            </div>

            <div className='buttonsWishlist'>
                <button className='closeWishlist' onClick={() => setWishlist([])}>Delete wishlist</button>
                <button className='shareWishlist'>Share wishlist</button>       
            </div>

        </div>
    )
}

export default Wishlist;