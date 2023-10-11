import React from "react";

function Filters({filter, filterButtons, handleFilterClick}) {
    return (
            <div>Filter {"  "}
            {filterButtons.map(
                btn => <span key={btn}>
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