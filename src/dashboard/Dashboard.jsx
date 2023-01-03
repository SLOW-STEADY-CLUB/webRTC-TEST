import React, { useEffect } from 'react';
import logo from '../assets/log.png';
//style
import styled from 'styled-components';
import ActiveUserList from './components/ActiveUsersList';
import * as webRTCHandler from '../utils/webRTC/webRTCHandler';
import DirectCall from './components/DirectCall/DirectCall';

const Dashboard = () => {

  useEffect(() => {
    console.log('useEffect 실행 성공')
    webRTCHandler.getLocalStream();
  },[])

  return(  
  <STContainer>
    <div>
<STContent>
  <DirectCall />
</STContent>
<STRooms>room</STRooms>
</div>
<div>
<STUsers>
  <ActiveUserList />
</STUsers>
<STLogo></STLogo>
</div>
  </STContainer>
  )
}
const STContainer = styled.div`

`;
const STContent = styled.div`
position: absolute;
left:0;
top:0;

/* background-color: #f6f6f6; */
width:1200px;
height: 900px;
`;

const STRooms = styled.div`  
position:absolute;
left: 0;
top: 900px;
`;

const STUsers = styled.div`
width: 20%;
position: absolute;
left: 1200px;
top:0;

margin-top: 20px;

display: flex;
align-items: center;
justify-content: center;

`;

const STLogo = styled.div`
/* background-color: white; */
position: absolute;
left: 1200px;
top:900px;
width: 200px;
height:200px;
margin-left: 35px;
margin-top: 20px;
background-position: center;
background-size: cover;
background-image: url(${logo});
`;

export default Dashboard;
