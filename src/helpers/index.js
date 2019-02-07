import { capitalize } from '../utilities';
import { FILTER_TYPE, USER_STATUS, STATUS_CHANGE_ACTIONS } from '../constants';

export const getUsersByType = (users, type) => {
	if (!type) {
		return users;
	} else {
		return users.filter((user) => (user.status === type));
	}
};

export const getUsersByTypeAndFilter = (users, type, filter) => {
	const {filterQuery} = filter;

	return getUsersByType(users, type)
		.filter((user) => {
			switch (filter.type) {
			case FILTER_TYPE.NAME:
				return user.name.toLowerCase().includes(filterQuery.toLowerCase());
			case FILTER_TYPE.CITY:
				return user.city.toLowerCase().includes(filterQuery.toLowerCase());
			default:
				return user;
			}
		});
};

export const getNewUserStatus = (status, action) => {
	const statusesList = Object.keys(USER_STATUS);
	const currentIndex = statusesList.indexOf(status);

	switch (action) {
	case STATUS_CHANGE_ACTIONS.BACK:
		return statusesList[currentIndex - 1];
	case STATUS_CHANGE_ACTIONS.FORWARD:
		return statusesList[currentIndex + 1];
	default:
		return statusesList[currentIndex];
	}
};

export const getPrettifiedUserObject = (user) => {
	const {name, location, picture, id} = user;

	return {
		name: `${capitalize(name.first)} ${capitalize(name.last)}`,
		city: capitalize(location.city),
		image: picture.medium,
		status: USER_STATUS.APPLIED,
		id: id.value,
	};
};