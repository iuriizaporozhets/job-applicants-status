export const USER_STATUS = {
    APPLIED: 'APPLIED',
    INTERVIEWING: 'INTERVIEWING',
    HIRED: 'HIRED',
};

export const STATUS_CHANGE_ACTIONS = {
    BACK: 'BACK',
    FORWARD: 'FORWARD',
};

export const FILTER_TYPE = {
    NAME: 'NAME',
    CITY: 'CITY',
};

export const getUsersByType = (users, type) => {
    if (!type) {
        return users;
    } else {
        return users.filter((user) => (user.status === type));
    }
};

export const getUsersByTypeAndFilter = (users, type, filter) => {
    return getUsersByType(users, type)
        .filter((user) => {
            switch (filter.type) {
                case FILTER_TYPE.NAME:
                    return user.name.first.includes(filter.filterQuery) || user.name.last.includes(filter.filterQuery);
                case FILTER_TYPE.CITY:
                    return user.location.city.includes(filter.filterQuery);
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
            return statusesList[index];
    }
};