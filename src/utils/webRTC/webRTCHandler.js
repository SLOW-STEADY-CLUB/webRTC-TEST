import { CALL_LOCAL_STREAM, CALL_STATE, callStates } from "../../store/reducers/callSlice";
import store from "../../store/store";


const defaultConstrains = {
    video: true,
    audio: true,
}

export const getLocalStream = () => {

    navigator.mediaDevices.getUserMedia(defaultConstrains)
    .then(stream => {
        store.dispatch(CALL_LOCAL_STREAM(stream));
        store.dispatch(CALL_STATE(callStates.CALL_AVAILABLE));
    })
    .catch(err => {
        console.log('error occured when trying to get an access to get local stream');
        console.log(err);
    })
}