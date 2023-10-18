import { createSlice, configureStore } from '@reduxjs/toolkit'

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    page: 'stickers',
    filter: undefined,  // не обязательно это указывать
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
  },
})


export default configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
})

export const { choosePage, setFilter, setDefaultFilter } = commonSlice.actions;