import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "user",
    initialState:{ user:null },
    reducers:{
        loginUser: (state, action) => {
            console.log("payload login:::", action.payload)
            state.user = action.payload;
        },
        logoutUser: (state, action) => {
            state.user = null
        }
    }
})

export default userslice.reducer;

export const { loginUser, logoutUser } = userslice.actions;