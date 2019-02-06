import axios from 'axios';

const NATIONALITY = 'gb';
const USERS_NUMBER = 5;

export const Actions = {
    FETCH_USERS_COMPLETE: 'FETCH_USERS_COMPLETE',
    CHANGE_USER_STATUS: 'CHANGE_USER_STATUS',
};

const fetchUsersList = (dispatch) => {
    return function () {
        return axios.get(`https://randomuser.me/api/?nat=${NATIONALITY}&results=${USERS_NUMBER}`)
            .then(({data}) => {
                dispatch(usersActions.fetchUsersComplete(data.results));
            });
    };
};

export const usersActions = {
    fetchUsersComplete: (data) => ({type: Actions.FETCH_USERS_COMPLETE, payload: data}),
    changeUserStatus: (user, status) => ({type: Actions.CHANGE_USER_STATUS, payload: {user, status}}),
    fetchUsersList: fetchUsersList
};
