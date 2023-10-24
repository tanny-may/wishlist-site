import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortOrderAsc, setSortOrderDsc } from "../store";


function Sort() {
    const dispatch = useDispatch();
    const sortOrder = useSelector((state) => state.common.sortOrder);

    return (
        <div>Sort by: {"  "}
            <button onClick={() => dispatch(setSortOrderAsc())} className={sortOrder === 1 ? 'activeFilter' : 'filter'}>a — z</button> {"  "}
            <button onClick={() => dispatch(setSortOrderDsc())} className={sortOrder === -1 ? 'activeFilter' : 'filter'}>z — a</button>
        </div>
    )
}

export default Sort;