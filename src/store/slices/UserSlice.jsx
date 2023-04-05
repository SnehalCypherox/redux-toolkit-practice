// slice example


import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        // actions
        addUser(state, action) {
            state.push(action.payload)
            console.log(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
            console.log('hi' + action.payload);
        },
        deleteUsers(state, action) {
            state.splice(action.payload)
            console.log(action.payload);
        },
    },
});

console.log('userSlice = ', userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions




