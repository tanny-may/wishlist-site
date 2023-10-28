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
				className={sortOrder === "newFirst" ? "activeFilter" : "filter"}
			>
				<i>newest</i>
			</button>
			{"  "}
			<button
				onClick={() => dispatch(setSortOrderAsc())}
				className={sortOrder === "aFirst" ? "activeFilter" : "filter"}
			>
				a — z
			</button>{" "}
			{"  "}
			<button
				onClick={() => dispatch(setSortOrderDsc())}
				className={sortOrder === "zFirst" ? "activeFilter" : "filter"}
			>
				z — a
			</button>
		</div>
	);
}

export default Sort;
