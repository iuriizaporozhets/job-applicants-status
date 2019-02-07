import React from 'react';
import UserCard from './UserCard';
import renderer from 'react-test-renderer';
import { user } from './__mocks__';

describe('UserCard > ', () => {
	let wrapper;
	const userCardProps = {
		user,
		className: 'className',
		changeUserStatus: jest.fn(),
	};

	beforeEach(() => {
		wrapper = renderer.create(<UserCard {...userCardProps} />);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('should match snapshot', () => {
		const tree = wrapper.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('APPLIED user should contain 1 button', () => {
		expect(wrapper.root.findAllByType('button')).toHaveLength(1);
	});
});
