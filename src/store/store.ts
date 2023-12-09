import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardReducer";
import appReducer from "./appReducer";

const store = configureStore({
    reducer: {
        appState: appReducer,
        dashboardState: dashboardReducer
    }
})

export default store