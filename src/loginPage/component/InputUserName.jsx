import React from 'react';
import { useDispatch } from 'react-redux';
import { dashboardActions } from '../../store/reducers/dashboardSlice';
import styled from 'styled-components';
const InputUserName = (props) => {
    const {username, setUsername} = props;
    const onChangHandler = (e) => {
    setUsername(e.target.value);
    }
    return (
        <div>
            <STInputUser  placeholder='Your nick name' value={username} type='text' onChange={onChangHandler} />
        </div>
    );
};
const STInputUser = styled.input`
    
`
export default InputUserName;