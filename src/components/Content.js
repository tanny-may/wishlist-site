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
//       src: "https://e1.pxfuel.com/desktop-wallpaper/151/458/desktop-wallpaper-bubu-dudu-star-bubu-dudu.jpg",
//       parameter: "Colorful background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "birthday cake",
//       src: "https://e1.pxfuel.com/desktop-wallpaper/669/487/desktop-wallpaper-panda-bear-bubu-dudu-sticker-by-dev-dudu-bubu.jpg",
//       parameter: "Transparent background",
//       page: "stickers",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "walk",
//       src: "https://e1.pxfuel.com/desktop-wallpaper/430/980/desktop-wallpaper-bubuanddudu-bubu-dudu.jpg",
//       parameter: "Colorful background",
//       page: "stickers",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "candies gift",
//       src: "https://e1.pxfuel.com/desktop-wallpaper/445/33/desktop-wallpaper-panda-bear-bubu-dudu-sticker-by-dev-dudu-bubu.jpg",
//       parameter: "Transparent background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "starry sky",
//       src: "https://e1.pxfuel.com/desktop-wallpaper/266/502/desktop-wallpaper-panda-bear-bubu-dudu-dudu-bubu.jpg",
//       parameter: "Colorful background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "hike",
//       src: "https://e1.pxfuel.com/desktop-wallpaper/198/57/desktop-wallpaper-panda-bear-bubu-dudu-bubu-dudu.jpg",
//       parameter: "Colorful background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "cute yoga",
//       src: "https://e1.pxfuel.com/desktop-wallpaper/214/933/desktop-wallpaper-bubu-dudu-bubu.jpg",
//       parameter: "Transparent background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "huggs Bubu",
//       src: "https://e1.pxfuel.com/desktop-wallpaper/805/74/desktop-wallpaper-panda-bear-hug-bubu-dudu-bubu-dudu.jpg",
//       parameter: "Transparent background",
//       page: "stickers",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Dudu on horse",
//       src: "https://ae04.alicdn.com/kf/S35435378092e48a3973993d64e47a44b5.jpg_640x640.jpg",
//       parameter: "Plastic toy",
//       page: "toys",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "Bubu hiker",
//       src: "https://ae04.alicdn.com/kf/S9a9810c84d7445eaa3f1b1150be0dc38g.jpg",
//       parameter: "Soft toy",
//       page: "toys",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "Dudu with cup",
//       src: "https://ae04.alicdn.com/kf/Sff0cf379f2de45318e15221aa82209486.jpg_640x640.jpg",
//       parameter: "Plastic toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu in yellow shirt",
//       src: "https://ae04.alicdn.com/kf/Sf5083b4816414b20bbf37ade9b473c58m.jpg_640x640.jpg",
//       parameter: "Soft toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Dudu hiker",
//       src: "https://ae04.alicdn.com/kf/Sae23b7713421422cbadb4b9ea09501103.jpg_640x640.jpg",
//       parameter: "Soft toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu on horse",
//       src: "https://ae04.alicdn.com/kf/Sef12b657e3bc450e856011e163b5a8a7w.jpg_640x640.jpg",
//       parameter: "Plastic toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Dudu in yellow shirt",
//       src: "https://ae04.alicdn.com/kf/Sfdfe40e504c64db8bdd77ce06addb175i.jpg_640x640.jpg",
//       parameter: "Soft toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu with cup",
//       src: "https://ae04.alicdn.com/kf/S4eec4f23c20c4ea4a1f1c48bb6f56e38m.jpg_640x640.jpg",
//       parameter: "Plastic toy",
//       page: "toys",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu on pony",
//       src: "https://ae04.alicdn.com/kf/S64ddbe993f994f84977a0b81b011a113P.jpg_640x640.jpg",
//       parameter: "White pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "night",
//       src: "https://ae04.alicdn.com/kf/S64b8b6336eec45909bc63472ef661751I.jpg_640x640.jpg",
//       parameter: "Colorful pillow",
//       page: "pillows",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "Dudu on pony",
//       src: "https://ae04.alicdn.com/kf/S4c381fbcef9445ffaec49ebf699909079.jpg_640x640.jpg",
//       parameter: "White pillow",
//       page: "pillows",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "take a photo",
//       src: "https://ae04.alicdn.com/kf/S98dbe1ec8f964065b18195f89ebe90a7Y.jpg_640x640.jpg",
//       parameter: "Colorful pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "Bubu on pillows",
//       src: "https://ae04.alicdn.com/kf/Sb6cbacc21b9f4bbda29e94b3cac01588U.jpg_640x640.jpg",
//       parameter: "White pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "sleep",
//       src: "https://ae04.alicdn.com/kf/S8072b1a989d2413a8d6e9b9e53eda88dB.jpg_640x640.jpg",
//       parameter: "Colorful pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "with scarves",
//       src: "https://ae04.alicdn.com/kf/Sdb5e5ec3010540c2b15af79f7f4e65c8F.jpg_640x640.jpg",
//       parameter: "White pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "smartphones",
//       src: "https://ae04.alicdn.com/kf/S53248b14abeb4e5fae005a7ffb0f86a4y.jpg_640x640.jpg",
//       parameter: "Colorful pillow",
//       page: "pillows",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "loving couple",
//       src: "https://ae04.alicdn.com/kf/S445bff56f14b47348fbfe2e1435ff73dd.jpg_640x640.jpg",
//       parameter: "Female T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "sweet dreams",
//       src: "https://ae04.alicdn.com/kf/S771e093c6257472289ae232b83267aa4n.jpg_640x640.jpg",
//       parameter: "Male T-shirt",
//       page: "t-shirts",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "play with box",
//       src: "https://ae04.alicdn.com/kf/Scb88f8674906466e97c730d3c9917ebd8.jpg_640x640.jpg",
//       parameter: "Female T-shirt",
//       page: "t-shirts",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "cool Bubu",
//       src: "https://ae04.alicdn.com/kf/Sca873d1508c048e7a329d0d890f79a864.jpg_640x640.jpg",
//       parameter: "Male T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "watch movie",
//       src: "https://ae04.alicdn.com/kf/Se2c7e4bb81ab44ddbd4d8b849d3f0b66x.jpg",
//       parameter: "Female T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "nighty car",
//       src: "https://ae04.alicdn.com/kf/S228d00498e35434d86b5715eb1b2e971c.jpg_640x640.jpg",
//       parameter: "Male T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "jumping Bubu",
//       src: "https://ae04.alicdn.com/kf/Sa4c2b408096e4e24b0078276c6e63b66U.jpg_640x640.jpg",
//       parameter: "Female T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "walk with ballon",
//       src: "https://ae04.alicdn.com/kf/Sddde2972f4c74a10b8342ecdd36781359.jpg_640x640.jpg",
//       parameter: "Male T-shirt",
//       page: "t-shirts",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "vacation time",
//       src: "https://ae04.alicdn.com/kf/S2a2df00c50cb43e3b764bdc7ba2e34c7J.jpg_640x640.jpg",
//       parameter: "Without frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "in aquapark",
//       src: "https://ae04.alicdn.com/kf/S14debabb11a144e2b06b72465eca8dcf4.jpg_640x640.jpg",
//       parameter: "With frame",
//       page: "posters",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "snowy winter",
//       src: "https://ae04.alicdn.com/kf/Sfc0846a206ab4bbca1d1845820e424c3R.jpg_640x640.jpg",
//       parameter: "Without frame",
//       page: "posters",
//       date: "2023-10-11T11:30:30",
//     },
//     {
//       name: "beach play",
//       src: "https://ae04.alicdn.com/kf/Sbf3b664613814e279cb1cd9fb342512fn.jpg",
//       parameter: "With frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "picnic",
//       src: "https://ae04.alicdn.com/kf/Sd65d7de1290842dc9b0df494dccc9f72G.jpg_640x640.jpg",
//       parameter: "Without frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "good nigth",
//       src: "https://ae04.alicdn.com/kf/Se00839683d8c49cf87e82e5ecbb07a74V.jpg_640x640.jpg",
//       parameter: "With frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "try a piece",
//       src: "https://ae04.alicdn.com/kf/S73e5cec4aef64167946b4b17df3b4059A.jpg_640x640.jpg",
//       parameter: "Without frame",
//       page: "posters",
//       date: "2023-09-11T11:30:30",
//     },
//     {
//       name: "like Titanic",
//       src: "https://ae04.alicdn.com/kf/Sc42ccd8f7bd640768c815ba15735b38fy.jpg_640x640.jpg",
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
		fetch("https://mocki.io/v1/8b1f7527-2831-44b6-a76d-756c19f3bb83")
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
		<div className="content-div">
			<div className="filtersSortWishlist" style={{ opacity: wishlistVisible ? 0.1 : 1 }}>
				<Filters />
				<Sort />
				<button onClick={() => dispatch(showWishlist())}>
					Wishlist❤️<span>{wishlist.length}</span>
				</button>
			</div>

			<div className="cards" style={{ opacity: wishlistVisible ? 0.1 : 1 }}>
				{items.map((el) => {
					return <Card item={el} key={el.name}></Card>;
				})}
			</div>

			<WishList></WishList>

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
