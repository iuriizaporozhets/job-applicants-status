import { user } from '../components/__mocks__';
import {
    getUsersByType,
    getUsersByTypeAndFilter,
    getNewUserStatus,
    USER_STATUS,
    FILTER_TYPE,
    STATUS_CHANGE_ACTIONS
} from '../helpers';

describe('getUsersByType > ', () => {
    it('should return 1 APPLIED user', () => {
        const users = getUsersByType([user], USER_STATUS.APPLIED);
        expect(users).toHaveLength(1);
    });

    it('should return no users', () => {
        const users = getUsersByType([user], USER_STATUS.INTERVIEWING);
        expect(users).toHaveLength(0);
    });
});

describe('getUsersByTypeAndFilter > ', () => {
    it('should return 1 APPLIED user filtered by City(london)', () => {
        const users = getUsersByTypeAndFilter([user], USER_STATUS.APPLIED, {
            type: FILTER_TYPE.CITY,
            filterQuery: 'london',
        });
        expect(users).toHaveLength(1);
    });

    it('should return 1 APPLIED user filtered by Name(mckinney)', () => {
        const users = getUsersByTypeAndFilter([user], USER_STATUS.APPLIED, {
            type: FILTER_TYPE.NAME,
            filterQuery: 'mckinney',
        });
        expect(users).toHaveLength(1);
    });

    it('should return no users filtered by Name(mccartney) ', () => {
        const users = getUsersByTypeAndFilter([user], USER_STATUS.APPLIED, {
            type: FILTER_TYPE.NAME,
            filterQuery: 'mccartney',
        });
        expect(users).toHaveLength(0);
    });
});

describe('getNewUserStatus > ', () => {
    it('should return APPLIED status when back from INTERVIEWING', () => {
        const status = getNewUserStatus(USER_STATUS.INTERVIEWING, STATUS_CHANGE_ACTIONS.BACK);
        expect(status).toEqual(USER_STATUS.APPLIED);
    });

    it('should return HIRED status when forward from INTERVIEWING', () => {
        const status = getNewUserStatus(USER_STATUS.INTERVIEWING, STATUS_CHANGE_ACTIONS.FORWARD);
        expect(status).toEqual(USER_STATUS.HIRED);
    });
});