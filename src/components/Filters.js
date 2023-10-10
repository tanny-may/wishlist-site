import React from "react";
import './Filters.css';

function Filters({filter, filterButtons, handleFilterClick}) {
    return (
            <div>Filter {"  "}
            {filterButtons.map(
                btn => <span>
                    <button 
                        onClick={handleFilterClick}
                        className={filter === btn.toLowerCase() ? 'activeFilter' : 'filter'}>
                        {btn}
                    </button> {" "}
                    </span>
                )}
            </div>
    )
}

export default Filters;