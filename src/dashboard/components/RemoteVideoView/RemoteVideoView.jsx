import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
const RemoteVideoView = ({remoteStream}) => {
    const remoteVideoRef = useRef();
    useEffect(() => { 
        if (remoteStream) {
            const remoteVideo = remoteStream.current;
            remoteVideo.srcObject = remoteVideoRef;

            remoteVideo.onloadedmetadata = () => {
                remoteVideo.play();
            }
        }
     },[remoteStream])
    return (
        <STVideoContainer>
            <STVide ref={remoteVideoRef} autoPlay ></STVide>
        </STVideoContainer>
    );
};

const STVideoContainer = styled.div`
width: 100%;
height: 100%;

`

const STVide = styled.video`
width: 100%;
height: 100%;
`
export default RemoteVideoView;