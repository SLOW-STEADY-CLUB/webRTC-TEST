import { createSlice } from "@reduxjs/toolkit";


export const callStates = {
    CALL_UNAVAILABLE: 'CALL_UNAVAILABLE',
    CALL_AVAILABLE: 'CALL_AVAILABLE',
    CALL_REQUESTED: 'CALL_REQUESTED',
    CALL_IN_PROGRESS: 'CALL_IN_PROGRESS',
}

export const callSlice = createSlice({
    name:'call',
    initialState: {
        localStream: null,
        callState: callStates.CALL_UNAVAILABLE,
        callingDialogVisible: false,
        callerUsername: ''
    },
    reducers: {
        CALL_LOCAL_STREAM: (state, action) => {
            state.localStream = action.payload;
        },
        CALL_STATE: (state, action) => {
            state.callState = action.payload;

        }
    }
})

export const { CALL_LOCAL_STREAM, CALL_STATE } = callSlice.actions;
export default callSlice.reducer;