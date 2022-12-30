import {createSlice} from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
    name: 'dashboar',
    initialState: {
        username: ''
    },
    reducers: {
        dashboardActions: (state, action) => {
            state.username += action.username
        }
    }
})

export const { dashboardActions } = dashboardSlice.actions;
export default dashboardSlice.reducer;

