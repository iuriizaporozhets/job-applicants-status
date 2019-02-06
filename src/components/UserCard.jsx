import React from 'react';
import styled from 'styled-components';

import { USER_STATUS, STATUS_CHANGE_ACTIONS, getNewUserStatus } from '../helpers';
import { capitalize } from '../utilities';

const UserCard = (props) => {
    const {user, className, changeUserStatus} = props;
    const {picture, status} = user;

    return (
        <div className={className}>
            <header>
                <UserPhotoWrapper>
                    <img src={picture.medium}/>
                </UserPhotoWrapper>
                <UserName>
                    {capitalize(user.name.first) + ' ' + capitalize(user.name.last)}
                </UserName>
            </header>
            <FooterStyled>
                { status !== USER_STATUS.APPLIED ?
                    <ButtonStyled
                        onClick={() => {
                            changeUserStatus(user, getNewUserStatus(status, STATUS_CHANGE_ACTIONS.BACK))
                        }}>&#8592;</ButtonStyled> :
                    null }
                { status !== USER_STATUS.HIRED ?
                    <ButtonStyled
                        onClick={() => {
                            changeUserStatus(user, getNewUserStatus(status, STATUS_CHANGE_ACTIONS.FORWARD))
                        }}>&#8594;</ButtonStyled> :
                    null
                }
            </FooterStyled>
        </div>
    );
};

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
`;

const ButtonStyled = styled.button`height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    background-color: bisque;
    border: none;
`;

const UserPhotoWrapper = styled.div`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    overflow: hidden;
`;

const UserName = styled.div`
    margin-left: 10px;
`;

const UserCardStyled = styled(UserCard)`
    width: 100%;
    height: 130px;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid bisque;
    margin-top: 8px;
    
    header {
        display: flex;
        align-items: center;
    }
    
    footer {
        margin-top: 10px;
    }
`;

export default UserCardStyled;
