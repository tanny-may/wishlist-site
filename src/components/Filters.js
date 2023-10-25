import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setDefaultFilter, setCurrentPage } from "../store";

const stickerFilters = ['All stickers', 'Transparent background', 'Colorful background'];
const defaultStickerFilter = 'All stickers';
  
const toysFilters = ['All toys', 'Soft toy', 'Plastic toy'];
const defaultToysFilter = 'All toys';
  
const pillowsFilters = ['All pillows', 'White pillow', 'Colorful pillow'];
const defaultPillowsFilter = 'All pillows';
  
const tshirtsFilters = ['All T-shirts', 'Male T-shirt', 'Female T-shirt'];
const defaultTshirtsFilter = 'All T-shirts';
  
const postersFilters = ['All posters', 'With frame', 'Without frame'];
const defaultPostersFilter = 'All posters';
    

function Filters() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.common.filter);
    const page = useSelector((state) => state.common.page);

    let filterValues, defaultFilter;
    switch(page) {
      case 'toys':
        filterValues = toysFilters;
        defaultFilter = defaultToysFilter;
        break;
      
      case 'pillows':
        filterValues = pillowsFilters;
        defaultFilter = defaultPillowsFilter;
        break;
  
      case 't-shirts':
        filterValues = tshirtsFilters;
        defaultFilter = defaultTshirtsFilter;
        break;
  
      case 'posters':
        filterValues = postersFilters;
        defaultFilter = defaultPostersFilter;
        break;
  
      default:
        filterValues = stickerFilters;
        defaultFilter = defaultStickerFilter;
    }
    dispatch(setDefaultFilter(defaultFilter))

    if (!filterValues.map(f => f.toLowerCase()).includes(filter)) {
        dispatch(setFilter(defaultFilter))
    }

    return (
      <div>Filter: {"  "} {filterValues.map(btn => <span key={btn}>
          <button 
              onClick={() => {
                dispatch(setFilter(btn));
                dispatch(setCurrentPage(1))
              }}
              className={filter === btn.toLowerCase() ? 'activeFilter' : 'filter'}>
              {btn}
          </button> {" "}
          </span>
          )}
      </div>
    )
}

export default Filters;