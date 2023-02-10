const { createSlice } = require("@reduxjs/toolkit");

const store = createSlice({
    initialState: { searchText: '', selectedCategory: '' },
    name: 'store',
    reducers: {
        setSearchText(state, { payload }) {
            state.selectedCategory = '';
            state.searchText = payload
        },
        setCategory(state, { payload }) {
            state.selectedCategory = payload;
            state.searchText = '';
        }
    }
})

export const { setSearchText, setCategory } = store.actions;
export default store.reducer;


