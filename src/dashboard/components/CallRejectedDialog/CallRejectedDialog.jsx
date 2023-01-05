import React from 'react';
import styled from 'styled-components';
const CallRejectedDialog = () => {
    return (
        <dSTDialogiv>
            Call rejected
        </dSTDialogiv>
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

export default CallRejectedDialog;