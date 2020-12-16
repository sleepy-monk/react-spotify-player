import React, { useState, useEffect } from "react";
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { getUser } from '../api';

const StyledUserWidget = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    grid-area : user;

    .avatar {
        margin-right: 10px;
        img {
            border-radius: 50%;
            width: 28px;
        }
    }

    .user {
        font-size: 15px;
        line-height: 25px;
    }
`

const UserWidget = () => {
    const [data,setData] = useState(null);

    useEffect(() => {
        console.log(data)
        if(!data) {
            getUser()
                .then(setData);
        }
    },[data]);
    if(!data) { return <div></div> }
    return (
        <StyledUserWidget className="user-widget">
            <div className="avatar">
                <img src={data.images[0].url} alt="user-image" />
            </div>
            <div className="user">
                {data.display_name}
            </div>
        </StyledUserWidget>
    )
}

UserWidget.propTypes = {
}

export default UserWidget;
