import { CALL_LOCAL_STREAM, CALL_STATE, callStates, CALL_CALLING_DIALOG_VISIBLE, CALL_CALLER_USERNAME } from "../../store/reducers/callSlice";
import store from "../../store/store";
import * as wss from '../wssConnection/wssConnection';

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

let connectedUserSocketId;

export const callToOtherUser = (callDetails) => {
    connectedUserSocketId = callDetails.socketId;
    store.dispatch(CALL_STATE(callStates.CALL_IN_PROGRESS));
    store.dispatch(CALL_CALLING_DIALOG_VISIBLE(true));
    wss.sendPreOffer({
        callDetails : store.CALL_STATE().dashboard.username
    })
}

export const handlerPreOffer = (data) => {
    connectedUserSocketId = data.callerSocketId;
    store.dispatch(CALL_CALLER_USERNAME(data.callerUsername));
    store.dispatch(CALL_STATE(callStates.CALL_REQUESTED))
}