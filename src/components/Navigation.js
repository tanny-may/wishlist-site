import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { choosePage, setCurrentPage, setFilter, setDefaultFilter } from "../store";

const pages = ["stickers", "toys", "pillows", "t-shirts", "posters"];

function Navigation() {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.common.page);

	return (
		<nav>
			<ul className="nav__ul">
				{pages.map((el) => (
					<li
						key={el}
						onClick={() => {
							let defaultFilter = getDefaultFilter(el);
							dispatch(choosePage(el));
							dispatch(setCurrentPage(1));
							dispatch(setFilter(defaultFilter));
							dispatch(setDefaultFilter(defaultFilter));
						}}
						className="nav__li"
					>
						<a href="/#" className={page === el.toLowerCase() ? "nav__a nav__a--active" : "nav__a"}>
							{el}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

function getDefaultFilter(page) {
	switch (page) {
		case "toys":
			return "All toys";
		case "pillows":
			return "All pillows";
		case "t-shirts":
			return "All T-shirts";
		case "posters":
			return "All posters";
		default:
			return "All stickers";
	}
}

export default Navigation;
export { getDefaultFilter };
