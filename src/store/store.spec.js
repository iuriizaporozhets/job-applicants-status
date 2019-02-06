import configureStore from '../store';
import { usersActions } from '../actions/users.actions';
import { filterActions } from '../actions/filter.actions';
import { user } from '../components/__mocks__';
import { FILTER_TYPE } from '../helpers';

describe('Store state tests > ', () => {
    let store;
    const usersList = [user];

    beforeAll(() => {
        store = configureStore();
    });

    it('users should be set to store', () => {
        store.dispatch(usersActions.fetchUsersComplete(usersList));
        expect(store.getState().users).toEqual(usersList);
    });

    it('filterQuery should be updated', () => {
        const filterQuery = 'London';
        store.dispatch(filterActions.setFilterQuery(filterQuery));
        const {filter} = store.getState();
        expect(filter.filterQuery).toEqual(filterQuery);
    });

    it('filterType should be updated', () => {
        store.dispatch(filterActions.setFilterType(FILTER_TYPE.CITY));
        const {filter} = store.getState();
        expect(filter.type).toEqual(FILTER_TYPE.CITY);
    });
});