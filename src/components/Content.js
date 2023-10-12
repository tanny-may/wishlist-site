import React, { useState } from 'react';
import Card from './Card';
import Filters from './Filters';
import WishList from './WishList';


function Content(props) {
    const [filter, setFilter] = useState(props.defaultFilter.toLowerCase());
    const [wishlist, setWishlist] = useState([]);   

    function addToWishList(item) {
        function handler () {
            setWishlist([...wishlist, item])
        }
        return handler;
    } 

    function deleteFromWishList(item) {
        function handler () {
            setWishlist(wishlist.filter(el => el.name !== item.name))
        }
        return handler;
    } 

    if (!props.filterValues.map(f => f.toLowerCase()).includes(filter)) {
        setFilter(props.defaultFilter.toLowerCase());
    }
    
    let data = props.data;
    if (filter.toLowerCase() !== props.defaultFilter.toLowerCase()) {
        data = data.filter(el => el.parameter.toLowerCase() === filter)
    }
    console.log(wishlist);

    const [visible, setVisible] = useState(false);

    return (
        <div className='content-div'>
            <div className='filtersAndCart'>
                <Filters filter={filter} filterButtons ={props.filterValues} handleFilterClick={(event => setFilter(event.target.textContent.trim().toLowerCase()))}/>
                <button onClick={()=>setVisible(true)}>Wishlist❤️</button>
            </div>

            <div className='cards'>
                {data.map(el => {
                    let inWishlist = wishlist.some(wishlistElem => wishlistElem.name === el.name);
                    
                    return <Card 
                        key={el.name} 
                        src={el.src} 
                        parameter={el.parameter} 
                        name={el.name} 
                        handleClick={inWishlist ? deleteFromWishList(el) : addToWishList(el)}
                        buttonText={inWishlist ? 'Delete from wishlist' : 'Add to wishlist'}
                        style={inWishlist ? {backgroundColor: 'rgb(255, 203, 255)', color: "rgb(46, 30, 47)"} :{backgroundColor: 'rgb(255, 158, 255)', color: "white"}}
                    ></Card>
                })}
                
            </div>

            <WishList visible={visible} setVisible={setVisible}></WishList>
        </div>
    );
}

export default Content;