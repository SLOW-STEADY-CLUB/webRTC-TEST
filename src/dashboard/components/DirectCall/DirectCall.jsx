import React from 'react';
import { useSelector } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
const DirectCall = (props) => {
    const {remoteStream} = props;

const localStream = useSelector(state => state.call.localStream);
    // const remoteStream = useSelector(state => state.call.localStream);
    return (
        <>
         <LocalVideoView localStream={localStream} />
         {remoteStream && <RemoteVideoView remoteStream={remoteStream} /> }
        </>
    );
};



export default DirectCall;