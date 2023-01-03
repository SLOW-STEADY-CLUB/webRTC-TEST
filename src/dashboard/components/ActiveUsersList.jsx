import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';
import ActiveUserListItem from './ActiveUserListItem';


    const ActiveUsersList = () => {
    const activeUsers = useSelector((state) => state.dashboard.activeUsers)

    return (
        <div>
            {activeUsers.map((userList)=>{
                return(
                <ActiveUserListItem key={userList.socketId} userList={userList} />
                )})}
        </div>
    );
};

export default ActiveUsersList;