import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {value: ''};

const filterSlice = createSlice({
	name: "filter",
	initialState: filterInitialState,
	reducers: {
		changeFilter: {
			reducer(state, action) {
				return {
					...state,
					value: action.payload
				}
			  },
		},
	}
});



export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;

// Selector
export const getFilter = state => state.filter.value;
