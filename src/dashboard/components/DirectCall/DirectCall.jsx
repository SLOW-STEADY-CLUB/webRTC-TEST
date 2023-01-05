import React from 'react';
import { useSelector } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
const DirectCall = (props) => {
    const {remoteStream} = props;

const { localStream, callState, callerUsername } = useSelector(state => ({
    localStream: state.call.localStream,
    callState: state.call.callState,
    callerUsername: state.call.callState,
}
));
    // const remoteStream = useSelector(state => state.call.localStream);
    return (
        <>
         <LocalVideoView localStream={localStream} />
         {remoteStream && <RemoteVideoView remoteStream={remoteStream} /> }
        </>
    );
};



export default DirectCall;