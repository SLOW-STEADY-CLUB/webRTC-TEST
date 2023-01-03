import React, {useRef, useEffect} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const LocalVideoView = () => {
   
    const localStream = useSelector(state => state.call.localStream);
    const localVideoRef = useRef();
    useEffect(() => { 
        const localVideo = localVideoRef.current;
        if (localStream) {
            
            localVideo.srcObject = localStream;

            localVideo.onloadedmetadata = () => {
                localVideo.play();
                
            }
        }
       
     },[localStream])
    return (
        <STVideoContainer>
            <STVide ref={localVideoRef} autoPlay muted></STVide>
        </STVideoContainer>
    );
};

const STVideoContainer = styled.div`
/* background-color: red; */
 width: 650px;
 height: 650px;
 border-radius: 8px;
 position: absolute;
 top: 20%;
 right: -38%;
`

const STVide = styled.video`
width: 100%;
height: 100%;

`
export default LocalVideoView;