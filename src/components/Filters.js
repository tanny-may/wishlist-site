import { useDispatch, useSelector } from "react-redux";
import { setFilter, setCurrentPage } from "../store";

function Filters() {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.common.filter);
	const page = useSelector((state) => state.common.page);

	let filterValues = getFilterValues(page);

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
						className={filter === btn.toLowerCase() ? "filters__button filters__button--active" : "filters__button"}
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
			return ["All toys", "Soft toy", "Plastic toy"];
		case "pillows":
			return ["All pillows", "White pillow", "Colorful pillow"];
		case "t-shirts":
			return ["All T-shirts", "Male T-shirt", "Female T-shirt"];
		case "posters":
			return ["All posters", "With frame", "Without frame"];
		default:
			return ["All stickers", "Transparent background", "Colorful background"];
	}
}
export default Filters;
