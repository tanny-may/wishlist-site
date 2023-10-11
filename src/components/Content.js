import React, { useState } from 'react';
import Card from './Card';
import Filters from './Filters';
import ShoppingCart from './ShoppingCart';


function Content(props) {
    const [filter, setFilter] = useState(props.defaultFilter.toLowerCase());

    if (!props.filterValues.map(f => f.toLowerCase()).includes(filter)) {
        setFilter(props.defaultFilter.toLowerCase());
    }
    
    let data = props.data;
    if (filter.toLowerCase() !== props.defaultFilter.toLowerCase()) {
        data = data.filter(el => el.parameter.toLowerCase() === filter)
    }

    return (
        <div className='content-div'>
            <div className='filtersAndCart'>
                <Filters filter={filter} filterButtons ={props.filterValues} handleFilterClick={(event => setFilter(event.target.textContent.trim().toLowerCase()))}/>
                <ShoppingCart/>
            </div>

            <div className='cards'>
                {data.map(el => <Card key={el.name} src={el.src} parameter={el.parameter} name={el.name}></Card>)}
            </div>
        </div>
    );
}

export default Content;