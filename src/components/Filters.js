import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setDefaultFilter, setCurrentPage } from "../store";

const stickerFilters = ["All stickers", "Transparent background", "Colorful background"];
const defaultStickerFilter = "All stickers";

const toysFilters = ["All toys", "Soft toy", "Plastic toy"];
const defaultToysFilter = "All toys";

const pillowsFilters = ["All pillows", "White pillow", "Colorful pillow"];
const defaultPillowsFilter = "All pillows";

const tshirtsFilters = ["All T-shirts", "Male T-shirt", "Female T-shirt"];
const defaultTshirtsFilter = "All T-shirts";

const postersFilters = ["All posters", "With frame", "Without frame"];
const defaultPostersFilter = "All posters";

function Filters() {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.common.filter);
	const page = useSelector((state) => state.common.page);

	let [filterValues, defaultFilter] = getFilterValues(page);

	useEffect(() => {
		dispatch(setDefaultFilter(defaultFilter));
	}, [dispatch, defaultFilter]);

	useEffect(() => {
		if (!filterValues.map((f) => f.toLowerCase()).includes(filter)) {
			dispatch(setFilter(defaultFilter));
		}
	}, [dispatch, filter, defaultFilter, filterValues]);

	return (
		<div>
			Filter: {"  "}{" "}
			{filterValues.map((btn) => (
				<span key={btn}>
					<button
						onClick={() => {
							dispatch(setFilter(btn));
							dispatch(setCurrentPage(1));
						}}
						className={filter === btn.toLowerCase() ? "activeFilter" : "filter"}
					>
						{btn}
					</button>{" "}
				</span>
			))}
		</div>
	);
}

function getFilterValues(page) {
	switch (page) {
		case "toys":
			return [toysFilters, defaultToysFilter];
		case "pillows":
			return [pillowsFilters, defaultPillowsFilter];
		case "t-shirts":
			return [tshirtsFilters, defaultTshirtsFilter];
		case "posters":
			return [postersFilters, defaultPostersFilter];
		default:
			return [stickerFilters, defaultStickerFilter];
	}
}
export default Filters;
