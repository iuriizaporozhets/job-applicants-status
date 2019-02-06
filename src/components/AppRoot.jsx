import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { capitalize } from '../utilities';
import { USER_STATUS, getUsersByTypeAndFilter } from '../helpers';
import UserCard from './UserCard';
import UsersSection from './UsersSection';
import { usersActions } from '../actions/users.actions';
import Filter from './Filter';

export class AppRootBaseComponent extends React.Component {
    componentDidMount() {
        this.props.fetchUsersList();
    }

    getUserItems(status) {
        const {users, filter} = this.props;
        const filteredUser = getUsersByTypeAndFilter(users, status, filter);

        return filteredUser
            .map((user) => <UserCard
                user={user}
                changeUserStatus={this.changeUserStatus.bind(this)}
            />);
    }

    changeUserStatus(user, status) {
        this.props.changeUserStatus(user, status);
    }

    render() {
        const {className} = this.props;
        return (
            <div className={className}>
                <FilterWrapper>
                    <Filter />
                </FilterWrapper>
                <UsersSection
                    headerTitle={capitalize(USER_STATUS.APPLIED)}
                    children={this.getUserItems(USER_STATUS.APPLIED)}/>
                <UsersSection
                    headerTitle={capitalize(USER_STATUS.INTERVIEWING)}
                    children={this.getUserItems(USER_STATUS.INTERVIEWING)}/>
                <UsersSection
                    headerTitle={capitalize(USER_STATUS.HIRED)}
                    children={this.getUserItems(USER_STATUS.HIRED)}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        filter: state.filter,
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchUsersList: dispatch(usersActions.fetchUsersList),
    changeUserStatus: (user, status) => {
        dispatch(usersActions.changeUserStatus(user, status))
    },
});

const FilterWrapper = styled.div`
    width: 100%;
`;

const AppRootStyled = styled(AppRootBaseComponent)`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
`;


export default connect(mapStateToProps, mapDispatchToProps)(AppRootStyled);