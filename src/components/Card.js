import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, deleteFromWishlist } from "../store";
import { parseISO } from "date-fns";

function Card({ item }) {
	const dispatch = useDispatch();
	const wishlist = useSelector((state) => state.common.wishlist);
	const inWishlist = wishlist.some((wishlistElem) => wishlistElem.name === item.name);
	const isNew = parseISO(item.date) > parseISO("2023-10-01");

	return (
		<div className="card-div">
			<img
				style={isNew ? { display: "flex" } : { display: "none" }}
				className="card-new"
				src="../new.png"
				alt="new"
			></img>
			<img className="card-img" src={item.src} alt="name"></img>
			<h4 className="card-h4">{item.name}</h4>
			<p className="card-p">{item.parameter}</p>
			<button
				style={
					inWishlist
						? {
								backgroundColor: "rgb(255, 203, 255)",
								color: "rgb(46, 30, 47)",
						  }
						: {
								backgroundColor: "rgb(255, 158, 255)",
								color: "white",
						  }
				}
				className="card-button"
				onClick={() => {
					dispatch(inWishlist ? deleteFromWishlist(item) : addToWishlist(item));
				}}
			>
				{inWishlist ? "Delete from wishlist" : "Add to wishlist"}
			</button>
		</div>
	);
}

function CardWishlist({ item }) {
	const dispatch = useDispatch();
	return (
		<div className="card-div cardWishlist-div">
			<img className="card-img cardWishlist-img" src={item.src} alt="name"></img>
			<h4 className="card-h4 cardWishlist-h4">{item.name}</h4>
			<button
				style={{ backgroundColor: "rgb(255, 203, 255)", color: "rgb(46, 30, 47)" }}
				className="card-button cardWishlist-button"
				onClick={() => dispatch(deleteFromWishlist(item))}
			>
				{"Delete"}
			</button>
		</div>
	);
}

export default Card;
export { CardWishlist };
