import React, { useState } from 'react';
import Card from './Card';

function Wishlist({visible, setVisible}) {
    return (
        <div className='wishlist-div' style={{display: visible ? 'block' : 'none'}}>
            <div className='headerAndClose'>
                <h1 className='wishlist-h1'>My Wishlist</h1>
                <button onClick={() => setVisible(false)}><span>❌</span></button>   
            </div>

            <Card></Card>
            <div className='buttonsWishlist'>
                <button className='closeWishlist'>Delete</button>
                <button className='shareWishlist'>Share</button>       
            </div>

        </div>
    )
}

export default Wishlist;