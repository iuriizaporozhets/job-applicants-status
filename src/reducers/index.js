import { combineReducers } from 'redux';
import { usersReducer } from './users.reducer';
import { filterReducer } from './filter.reducer';

export const rootReducer = combineReducers({
	users: usersReducer,
	filter: filterReducer
});