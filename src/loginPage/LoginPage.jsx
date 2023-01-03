import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { USER_NAME } from '../store/reducers/dashboardSlice';
import { useHistory } from 'react-router-dom';
import { registerNewUser } from '../utils/wssConnection/wssConnection'
//style
import styled from 'styled-components';
import log from '../assets/log.png'

//component
import ButtonJoin from './component/ButtonJoin';
/**
 * 중복체크 기능 업데이트할 때 쓰기로!
 */
// import ButtonSave from './component/ButtonSave';
import InputUserName from './component/InputUserName';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  // const userNameResult = useSelector(state => state.dashboard.username);

  const handlerJoinButton = () => {
    dispatch(USER_NAME(username));
    history.push('/dashboard');
    registerNewUser(username);
  }

  // useEffect(()=>{
  //   USER_NAME(username);
  // },[])
  // console.log("input Test", username)
  return (
  <div>
    <STLoginBox>
  <STTitleBox>
  <STLogo />
  <STTitle>WEB-CAM</STTitle>
  </STTitleBox>
  {/* <ButtonSave /> */}
<STButtonBox>
  <InputUserName username={username} setUsername={setUsername} />
  <ButtonJoin handlerJoinButton={handlerJoinButton} />
  <STHelp>help?</STHelp>
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
  flex-direction: column;
  align-items:center;
  justify-content :center ;
`;
const STTitleBox = styled.div`
  margin-top: 20px;
  margin-bottom: 0px;
`
const STLogo = styled.div`
/* background-color: #363633; */
  background-position: center;
  background-size: cover;
  width: 250px;
  height:250px;
  border-radius: 20px;
  background-image: url(${log});
  
`;
const STTitle = styled.h1`
  color:beige;
  text-align: center;
`

const STButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
`


const STHelp = styled.div`
  margin-top: 20px;
  color: white;
  opacity: 0.5;
  text-align: center;
  cursor: pointer;
  
`


export default LoginPage;
