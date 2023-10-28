import React from "react";
import { CardWishlist } from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { hideWishlist, clearWishlist } from "../store";

function Wishlist() {
	const dispatch = useDispatch();
	const wishlistVisible = useSelector((state) => state.common.wishlistVisible);
	const wishlist = useSelector((state) => state.common.wishlist);
	return (
		<div className="wishlist-div" style={{ display: wishlistVisible ? "block" : "none" }}>
			<div className="headerAndClose">
				<h1 className="wishlist-h1">My Wishlist</h1>
				<button onClick={() => dispatch(hideWishlist())}>❌</button>
			</div>

			<div className="wishlistCards">
				{wishlist.map((el) => {
					return <CardWishlist item={el} key={el.name}></CardWishlist>;
				})}
			</div>

			<div className="buttonsWishlist">
				<button className="closeWishlist" onClick={() => dispatch(clearWishlist())}>
					Clear wishlist
				</button>
				<button className="shareWishlist">Share wishlist</button>
			</div>
		</div>
	);
}

export default Wishlist;
