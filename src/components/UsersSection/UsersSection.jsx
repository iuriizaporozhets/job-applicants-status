import React from 'react';
import styled from 'styled-components';

const UsersSection = (props) => {
	const {className, headerTitle, children} = props;
	return (
		<div className={className}>
			<header>
				{headerTitle}
			</header>
			<article>
				{children}
			</article>
		</div>
	);
};

const UsersSectionStyled = styled(UsersSection)`
    flex: 1 0;
    padding: 8px;
    box-sizing: border-box;
    height: calc(100% - 40px);
    
    & > header {
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: center;
        background: lightblue;
        font-family: sans-serif;
    }
    
    & > article {
        overflow: auto;
        height: calc(100% - 30px);
    }
`;

export default UsersSectionStyled;