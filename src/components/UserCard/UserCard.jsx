import React from 'react';
import styled from 'styled-components';

import { USER_STATUS, STATUS_CHANGE_ACTIONS } from '../../constants';
import { getNewUserStatus } from '../../helpers';

const UserCard = (props) => {
	const {user, className, changeUserStatus} = props;
	const {image, status} = user;

	return (
		<div className={className}>
			<header>
				<UserPhotoWrapper>
					<img src={image}/>
				</UserPhotoWrapper>
				<UserInfo>
					<div>{user.name}</div>
					<div className="user-city">{user.city}</div>
				</UserInfo>
			</header>
			<FooterStyled>
				{ status !== USER_STATUS.APPLIED ?
					<ButtonStyled
						className="back-button"
						onClick={() => {
							changeUserStatus(user, getNewUserStatus(status, STATUS_CHANGE_ACTIONS.BACK));
						}}>&#8592;</ButtonStyled> :
					null }
				{ status !== USER_STATUS.HIRED ?
					<ButtonStyled
						className="forward-button"
						onClick={() => {
							changeUserStatus(user, getNewUserStatus(status, STATUS_CHANGE_ACTIONS.FORWARD));
						}}>&#8594;</ButtonStyled> :
					null
				}
			</FooterStyled>
		</div>
	);
};

const UserInfo = styled.div`
	margin-left: 10px;
	
	.user-city {
		font-size: 14px;
		color: #7d7d7d;
	}
`;

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
    
    &:only-child {
    	&.back-button {
    		margin-right: auto;
    	}
    	
    	&.forward-button {
    		margin-left: auto;
    	}
    }
`;

const UserPhotoWrapper = styled.div`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    overflow: hidden;
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
