import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';
const ActiveUserListItem = ({userList}) => {
    const handlerListPressed = () => {

    }
    return (
        <STContainer>
            <STList>{userList.username}</STList>            
        </STContainer>
    );
};
const STContainer = styled.div`
/* background-color: white; */
    
`
const STList = styled.div`
    border: 1px solid white;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 40px;

    margin: 10px;

    color: beige;
`
export default ActiveUserListItem;