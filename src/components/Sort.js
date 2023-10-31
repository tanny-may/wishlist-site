import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortOrderNew, setSortOrderAsc, setSortOrderDsc } from "../store";

function Sort() {
	const dispatch = useDispatch();
	const sortOrder = useSelector((state) => state.common.sortOrder);

	return (
		<div>
			Sort by: {"  "}
			<button
				onClick={() => dispatch(setSortOrderNew())}
				className={sortOrder === "newFirst" ? "filters__button--active" : "filters__button"}
			>
				<i>newest</i>
			</button>
			{"  "}
			<button
				onClick={() => dispatch(setSortOrderAsc())}
				className={sortOrder === "aFirst" ? "filters__button--active" : "filters__button"}
			>
				a — z
			</button>{" "}
			{"  "}
			<button
				onClick={() => dispatch(setSortOrderDsc())}
				className={sortOrder === "zFirst" ? "filters__button--active" : "filters__button"}
			>
				z — a
			</button>
		</div>
	);
}

export default Sort;
