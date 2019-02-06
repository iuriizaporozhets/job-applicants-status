import React from 'react';
import { FilterBaseComponent } from '../Filter';
import renderer from 'react-test-renderer';

describe('Filter > ', () => {
    const filterProps = {
        setFilterType: jest.fn(),
        className: 'className',
    };

    it('should match snapshot', () => {
        const tree = renderer
            .create(<FilterBaseComponent {...filterProps} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

