import { createSlice } from "@reduxjs/toolkit";

const generalStateSlice = createSlice({
    name: 'generalState',
    initialState: {
        sysLevel: 'sign-up',
    },
    reducers: {
        updateUserLevel: (state, action) => {
            state.sysLevel = action.payload
        }
    }
})
export const { updateUserLevel } = generalStateSlice.actions
export default generalStateSlice.reducer