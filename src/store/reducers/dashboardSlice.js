import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        username: "",
        activeUsers: []
    },
    reducers: {
        USER_NAME(state, action) {
            console.log(action.payload);
            state.username = action.payload;
        },
        USER_ACTIVE(state, action){
            state.activeUsers = action.payload;
        }
    }
})

export const { USER_NAME, USER_ACTIVE } = dashboardSlice.actions;
export default dashboardSlice.reducer;

