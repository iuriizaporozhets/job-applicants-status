import React from 'react';
import UsersSection from '../UsersSection';
import UserCard from '../UserCard';
import renderer from 'react-test-renderer';
import { user } from '../__mocks__';

describe('UsersSection > ', () => {
    let wrapper;
    const userCardProps = {
        user,
        className: 'className',
        changeUserStatus: jest.fn(),
        key: 'testUser'
    };

    const usersSectionProps = {
        title: 'title',
        children: [<UserCard {...userCardProps} />],
    };

    beforeEach(() => {
        wrapper = renderer.create(<UsersSection {...usersSectionProps} />)
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should match snapshot', () => {
        const tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should contain 1 UserCard component', () => {
        expect(wrapper.root.findAllByType(UserCard)).toHaveLength(1);
    });
});
