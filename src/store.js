import { createSlice, configureStore } from '@reduxjs/toolkit'

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    page: 'stickers',
    filter: undefined,  // не обязательно это указывать
    wishlistVisible: false,
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
    showWishlist: (state) => {
        state.wishlistVisible = true;
    },
    hideWishlist: (state) => {
        state.wishlistVisible = false;
    },

  },
})


export default configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
})

export const { choosePage, setFilter, setDefaultFilter, showWishlist, hideWishlist } = commonSlice.actions;