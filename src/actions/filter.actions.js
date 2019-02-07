export const Actions = {
	SET_FILTER_TYPE: 'SET_FILTER_TYPE',
	SET_FILTER_QUERY: 'SET_FILTER_QUERY',
};

export const filterActions = {
	setFilterType: (data) => ({type: Actions.SET_FILTER_TYPE, payload: {type: data}}),
	setFilterQuery: (data) => ({type: Actions.SET_FILTER_QUERY, payload: {filterQuery: data}}),
};
