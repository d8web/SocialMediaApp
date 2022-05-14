import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Visitante",
    avatar: "",
};

const slice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        }
    }
})

export const { setName, setAvatar } = slice.actions;
export default slice.reducer;