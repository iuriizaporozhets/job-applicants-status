import { Actions } from '../actions/filter.actions';

const initialState = {type: 'NAME', filterQuery: ''};

export const filterReducer = (state = initialState, action) => {
	switch (action.type) {
	case Actions.SET_FILTER_TYPE:
		return {type: action.payload.type, filterQuery: ''};
	case Actions.SET_FILTER_QUERY:
		return {...state, filterQuery: action.payload.filterQuery};
	default:
		return state;
	}
};