import React from "react";
import { CardWishlist } from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { hideWishlist, clearWishlist } from "../store";

function Wishlist() {
	const dispatch = useDispatch();
	const wishlistVisible = useSelector((state) => state.common.wishlistVisible);
	const wishlist = useSelector((state) => state.common.wishlist);
	return (
		<div className="wishlist__wrapper" style={{ display: wishlistVisible ? "block" : "none" }}>
			<div className="wishlist__headerAndClose">
				<h1 className="wishlist__h1">My Wishlist</h1>
				<button onClick={() => dispatch(hideWishlist())}>❌</button>
			</div>

			<div className="wishlist__cards">
				{wishlist.map((el) => {
					return <CardWishlist item={el} key={el.name}></CardWishlist>;
				})}
			</div>

			<div className="wishlist__buttons">
				<button onClick={() => dispatch(clearWishlist())}>
					Clear wishlist
				</button>
				<button>Share wishlist</button>
			</div>
		</div>
	);
}

export default Wishlist;
