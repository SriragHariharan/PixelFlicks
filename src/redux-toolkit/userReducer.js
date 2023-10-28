import { createSlice } from "@reduxjs/toolkit";
import { USER_DETAILS_LS } from "../utils/constants";

const userslice = createSlice({
    name: "user",
    initialState:{ user:JSON.parse(localStorage.getItem(USER_DETAILS_LS)) || null },
    reducers:{
        loginUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem(USER_DETAILS_LS, JSON.stringify(action.payload))
        },
        logoutUser: (state) => {
            state.user = null
            localStorage.setItem(USER_DETAILS_LS, JSON.stringify(null))
        }
    }
})

export default userslice.reducer;

export const { loginUser, logoutUser } = userslice.actions;