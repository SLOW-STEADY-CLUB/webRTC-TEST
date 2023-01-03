import React from 'react';
import styled from 'styled-components';
const ButtonJoin = ({handlerJoinButton}) => {
    return (
        <div>
            <STJoinVideoButton onClick={handlerJoinButton}>입장</STJoinVideoButton>
        </div>
    );
};

const STJoinVideoButton = styled.button`
  background-color: rgb(117, 55, 205);
  width: 250px;
  height: 70px;
  border-radius: 20px;

  color: beige;
  font-size: 30px;

  margin-top: 20px;

  cursor: pointer;
`

export default ButtonJoin;