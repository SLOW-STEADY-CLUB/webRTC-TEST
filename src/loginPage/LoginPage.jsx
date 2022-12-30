import React, { useState } from 'react'
//style
import styled from 'styled-components';
import log from '../assets/log.png'

import InputUserName from './component/InputUserName';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  return (
  <div>
    <STLoginBox>
<STButtonBox>
  <STLogo />
  <InputUserName username={username} setUsername={setUsername} />
  <STLoginButton></STLoginButton>
  <STJoinVideoButton></STJoinVideoButton>
</STButtonBox>
    </STLoginBox>
  </div>
  )
}

const STLoginBox = styled.div`
  width: 500px;
  height:700px;
  border-radius: 20px;
  background-color: #2c282d;
  
display:flex;
align-items:center;
justify-content :center ;
`;
const STLogo = styled.div`
/* background-color: #363633; */
color: white;
background-position: center;
background-size: cover;
width: 250px;
height:250px;
border-radius: 20px;
  background-image: url(${log});
  margin: 0px auto 70px auto;
  
`

const STButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
const STLoginButton = styled.button`
  background-color: rgb(117, 55, 205);
  width: 250px;
  height: 70px;
  border-radius: 20px;
  
  margin-top: 20px;

`
const STJoinVideoButton = styled.button`
background-color: rgb(117, 55, 205);
width: 250px;
  height: 70px;
  border-radius: 20px;
  
  margin-top: 20px;

`


export default LoginPage
