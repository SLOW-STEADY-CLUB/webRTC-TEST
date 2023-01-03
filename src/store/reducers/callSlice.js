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
        callState: callStates.CALL_UNAVAILABLE
    },
    reducers: {
        CALL_LOCAL_STREAM(state, localStream) {
            console.log(localStream.payload)
            state.localStream = localStream.payload;
        },
        CALL_STATE(state, callState) {
            state.callState = callState.payload;

        }
    }
})

export const { CALL_LOCAL_STREAM, CALL_STATE } = callSlice.actions;
export default callSlice.reducer;