import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Filters from "./Filters";
import Sort from "./Sort";
import WishList from "./WishList";
import Pagination from "./Pagination";
import { showWishlist } from "../store";
import { parseISO, compareDesc } from "date-fns";

// const items = [
//     {
//       name: "huggs Dudu",
//       src: "img/huggs-dudu.jpg",
//       parameter: "Colorful background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "birthday cake",
//       src: "img/birthday-cake.jpg",
//       parameter: "Transparent background",
//       page: "stickers",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "walk",
//       src: "img/walk.jpg",
//       parameter: "Colorful background",
//       page: "stickers",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "candies gift",
//       src: "img/candies-gift.jpg",
//       parameter: "Transparent background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "starry sky",
//       src: "img/starry-sky.jpg",
//       parameter: "Colorful background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "hike",
//       src: "img/hike.jpg",
//       parameter: "Colorful background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "cute yoga",
//       src: "img/cute-yoga.jpg",
//       parameter: "Transparent background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "huggs Bubu",
//       src: "img/huggs-bubu.jpg",
//       parameter: "Transparent background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Dudu on horse",
//       src: "img/dudu-on-horse.jpg",
//       parameter: "Plastic toy",
//       page: "toys",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "Bubu hiker",
//       src: "img/bubu-hiker.jpg",
//       parameter: "Soft toy",
//       page: "toys",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "Dudu with cup",
//       src: "img/dudu-with-cup.jpg",
//       parameter: "Plastic toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu in yellow shirt",
//       src: "img/bubu-in-yellow-tshirt.jpg",
//       parameter: "Soft toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Dudu hiker",
//       src: "img/dudu-hiker.jpg",
//       parameter: "Soft toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu on horse",
//       src: "img/bubu-on-horse.jpg",
//       parameter: "Plastic toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Dudu in yellow shirt",
//       src: "img/dudu-in-yellow-tshirt.jpg",
//       parameter: "Soft toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu with cup",
//       src: "img/bubu-with-cup.jpg",
//       parameter: "Plastic toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu on pony",
//       src: "img/bubu-on-pony.jpg",
//       parameter: "White pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "night",
//       src: "img/night.jpg",
//       parameter: "Colorful pillow",
//       page: "pillows",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "Dudu on pony",
//       src: "img/dudu-on-pony.jpg",
//       parameter: "White pillow",
//       page: "pillows",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "take a photo",
//       src: "img/take-a-photo.jpg",
//       parameter: "Colorful pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu on pillows",
//       src: "img/bubu-on-pillows.jpg",
//       parameter: "White pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "sleep",
//       src: "img/sleep.jpg",
//       parameter: "Colorful pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "with scarves",
//       src: "img/with-scarves.jpg",
//       parameter: "White pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "smartphones",
//       src: "img/smartphones.jpg",
//       parameter: "Colorful pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "loving couple",
//       src: "img/loving-couple.jpg",
//       parameter: "Female T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "happy birthday",
//       src: "img/hbd.jpg",
//       parameter: "Male T-shirt",
//       page: "t-shirts",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "play with box",
//       src: "img/play-with-box.jpg",
//       parameter: "Female T-shirt",
//       page: "t-shirts",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "cool Bubu",
//       src: "img/cool-bubu.jpg",
//       parameter: "Male T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "watch movie",
//       src: "img/watch-movie.jpg",
//       parameter: "Female T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "merry Christmas",
//       src: "img/merry-xmas.jpg",
//       parameter: "Male T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "jumping Bubu",
//       src: "img/jumping-bubu.jpg",
//       parameter: "Female T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "walk with umbrella",
//       src: "img/walk-with-umbrella.jpg",
//       parameter: "Male T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "vacation time",
//       src: "img/vacation-time.jpg",
//       parameter: "Without frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "in aquapark",
//       src: "img/in-aquapark.jpg",
//       parameter: "With frame",
//       page: "posters",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "snowy winter",
//       src: "img/snowy-winter.jpg",
//       parameter: "Without frame",
//       page: "posters",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "beach play",
//       src: "img/beach-play.jpg",
//       parameter: "With frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "picnic",
//       src: "img/picnic.jpg",
//       parameter: "Without frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "good nigth",
//       src: "img/good-night.jpg",
//       parameter: "With frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "try a piece",
//       src: "img/try-a-piece.jpg",
//       parameter: "Without frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "like Titanic",
//       src: "img/like-titanic.jpg",
//       parameter: "With frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//   ];

const pageSize = 4;

function Content() {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.common.page);
	const filter = useSelector((state) => state.common.filter);
	const defaultFilter = useSelector((state) => state.common.defaultFilter);
	const sortOrder = useSelector((state) => state.common.sortOrder);
	const pageNumber = useSelector((state) => state.common.currentPage);
	const wishlistVisible = useSelector((state) => state.common.wishlistVisible);
	const wishlist = useSelector((state) => state.common.wishlist);

	let [items, setItems] = useState([]);
	useEffect(() => {
		fetch("https://mocki.io/v1/b944a444-7b16-4a6e-acbb-81655d8c6eb5")
			.then((response) => response.json())
			.then((data) => {
				setItems(data);
			});
	}, []);

	items = filterItems(items, page, filter, defaultFilter);
	const totalItemsLength = items.length;
	items = sortItems(items, sortOrder);
	items = getPageItems(items, pageNumber);
	return (
		<div className="content__wrapper">
			<div className="content__filtersSortWishlist" style={{ opacity: wishlistVisible ? 0.1 : 1 }}>
				<Filters />
				<Sort />
				<button onClick={() => dispatch(showWishlist())}>
					Wishlist❤️<span>{wishlist.length}</span>
				</button>
			</div>

			<div className="content__cards" style={{ opacity: wishlistVisible ? 0.1 : 1 }}>
				{items.map((el) => {
					return <Card item={el} key={el.name}></Card>;
				})}
			</div>

			{wishlistVisible && <WishList/>}

			<Pagination pageSize={pageSize} totalItems={totalItemsLength} />
		</div>
	);
}

function filterItems(items, page, filter, defaultFilter) {
	let data = items.filter((i) => i.page === page);

	if (filter !== defaultFilter) {
		data = data.filter((el) => el.parameter.toLowerCase() === filter);
	}
	return data;
}

function sortItems(items, sortOrder) {
	return items.sort((a, b) => {
		if (sortOrder === "newFirst") return compareDesc(parseISO(a.date), parseISO(b.date));
		else if (sortOrder === "aFirst") return a.name.localeCompare(b.name);
		else return b.name.localeCompare(a.name);
	});
}

function getPageItems(items, pageNumber) {
	return items.slice(pageNumber * pageSize - pageSize, pageNumber * pageSize);
}

export default Content;
