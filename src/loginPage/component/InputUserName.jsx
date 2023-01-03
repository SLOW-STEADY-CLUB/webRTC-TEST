import React from 'react';
// import { useDispatch } from 'react-redux';
// import { dashboardActions } from '../../store/reducers/dashboardSlice';
import styled from 'styled-components';
const InputUserName = (props) => {
    const {username, setUsername} = props;
    const onChangHandler = (event) => {
        console.log(setUsername(event.target.value));
    setUsername(event.target.value);
    }
    return (
        <div>
            <STInputUser  placeholder='닉네임을 입력해주세요' value={username} type='text' onChange={onChangHandler} />
        </div>
    );
};
const STInputUser = styled.input`
    background-color: rgb(117, 55, 205);
    width: 210px;
    height: 40px; 
    border-radius: 20px;  
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
    color: white;
    
    &::placeholder{
        font-size: 20px;
        text-align: center;
        color: white;
    }
    `
export default InputUserName;