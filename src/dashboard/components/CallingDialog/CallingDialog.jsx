import React from 'react';
import styled from 'styled-components';
const CallingDialog = () => {
    return (
        <STDialog>
            <STUsername>
                Calling
            </STUsername>
            <STButton></STButton>
        </STDialog>
    );
};

const STDialog = styled.div`
    position: absolute;
    width: 400px;
    height: 300px;
    top: calc(50% - 150px);
    left: calc(50% - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`
const STUsername = styled.div`
    font-size: 30px;

`
const STButton = styled.div`
    margin-top: 30px;
`

export default CallingDialog;