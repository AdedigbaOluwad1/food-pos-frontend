import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatReducer";
import generalAppState from "./general-app-state";

const store = configureStore({
    reducer: {
        // chat: chatReducer,
        generalState: generalAppState
    }
})

export default store