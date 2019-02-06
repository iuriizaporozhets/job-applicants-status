import { Actions } from '../actions/users.actions';
import { USER_STATUS } from '../helpers';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_USERS_COMPLETE:
            return action.payload.map((user) => Object.assign(user, {status: USER_STATUS.APPLIED}));

        case Actions.CHANGE_USER_STATUS:
            return state.map((user) => {
                if (user.id.value !== action.payload.user.id.value) {
                    return user;
                } else {
                    return {...user, status: action.payload.status};
                }
            });

        default:
            return state;
    }
};