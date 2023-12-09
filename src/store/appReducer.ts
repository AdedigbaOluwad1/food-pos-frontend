import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appState',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        logOut: (state) => {
            state.isAuthenticated = false
        }
    }
})
export const {  } = appSlice.actions
export default appSlice.reducer