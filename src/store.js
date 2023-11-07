import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getDefaultFilter } from "./components/Navigation.js";

const commonSlice = createSlice({
	name: "common",
	initialState: {
		page: "stickers",
		filter: getDefaultFilter("stickers").toLowerCase(),
		defaultFilter: getDefaultFilter("stickers").toLowerCase(),
		sortOrder: "newFirst",
		wishlistVisible: false,
		wishlist: [],
		currentPage: 1,
	},
	reducers: {
		choosePage: (state, action) => {
			state.page = action.payload;
		},
		setFilter: (state, action) => {
			state.filter = action.payload.toLowerCase();
		},
		setDefaultFilter: (state, action) => {
			state.defaultFilter = action.payload.toLowerCase();
		},
		setSortOrderNew: (state) => {
			state.sortOrder = "newFirst";
		},
		setSortOrderAsc: (state) => {
			state.sortOrder = "aFirst";
		},
		setSortOrderDsc: (state) => {
			state.sortOrder = "zFirst";
		},
		showWishlist: (state) => {
			state.wishlistVisible = true;
		},
		hideWishlist: (state) => {
			state.wishlistVisible = false;
		},
		addToWishlist: (state, action) => {
			state.wishlist.push(action.payload);
		},
		deleteFromWishlist: (state, action) => {
			state.wishlist = state.wishlist.filter((el) => el.name !== action.payload.name);
		},
		clearWishlist: (state) => {
			state.wishlist = [];
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
});

export default configureStore({
	reducer: {
		common: commonSlice.reducer,
	},
});

export const {
	choosePage,
	setFilter,
	setDefaultFilter,
	setSortOrderAsc,
	setSortOrderDsc,
	setSortOrderNew,
	showWishlist,
	hideWishlist,
	addToWishlist,
	deleteFromWishlist,
	clearWishlist,
	loadItems,
	setCurrentPage,
} = commonSlice.actions;
