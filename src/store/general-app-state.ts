import { createSlice } from "@reduxjs/toolkit";

const generalStateSlice = createSlice({
    name: 'generalState',
    initialState: {
        sysLevel: 'sign-up',
        invoices: [],
        products: []
    },
    reducers: {
        updateUserLevel: (state, action) => {
            state.sysLevel = action.payload
        },
        // update this function
        updateInvoices: (state, action) => {
            state.invoices = action.payload
        },
        updateProducts: (state, action) => {
            state.products = action.payload
        }
    }
})
export const { updateUserLevel, updateProducts, updateInvoices } = generalStateSlice.actions
export default generalStateSlice.reducer