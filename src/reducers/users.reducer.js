import { Actions } from '../actions/users.actions';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
	case Actions.FETCH_USERS_COMPLETE:
		return action.payload;

	case Actions.CHANGE_USER_STATUS:
		return state.map((user) => {
			if (user.id !== action.payload.user.id) {
				return user;
			} else {
				return {...user, status: action.payload.status};
			}
		});

	default:
		return state;
	}
};