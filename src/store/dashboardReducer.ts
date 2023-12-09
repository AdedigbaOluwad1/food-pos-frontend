import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: 'dashboardState',
    initialState: {
        selectedDishCategory: 'Hot Dishes',
        dishes: []
    },
    reducers: {
        updateSelectedDishCategory: (state, action) => {
            state.selectedDishCategory = action.payload
        },
        updateDishes: (state, action) => {
            state.dishes = action.payload
        }
    }
})

export const { updateSelectedDishCategory, updateDishes } = dashboardSlice.actions
export default dashboardSlice.reducer