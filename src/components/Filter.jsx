import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FILTER_TYPE } from '../helpers';
import { filterActions } from '../actions/filter.actions';

export class FilterBaseComponent extends React.Component {
    constructor(options) {
        super(options);
        this.onFilterTypeChange = this.onFilterTypeChange.bind(this);
        this.onFilterQueryChange = this.onFilterQueryChange.bind(this);

    }
    onFilterTypeChange(event) {
        this.props.setFilterType(event.target.value);
        this.input.value = ''; // reset filter value on filter type change
    }
    onFilterQueryChange(event) {
        this.props.setFilterQuery(event.target.value);
    }
    render() {
        const {className} = this.props;
        return (
            <div className={className}>
                <select onChange={this.onFilterTypeChange}>
                    <option value={FILTER_TYPE.NAME}>Name</option>
                    <option value={FILTER_TYPE.CITY}>City</option>
                </select>
                <input ref={el => this.input = el} type="text" onChange={this.onFilterQueryChange}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterType: (type) => {
            dispatch(filterActions.setFilterType(type));
        },
        setFilterQuery: (filterQuery) => {
            dispatch(filterActions.setFilterQuery(filterQuery));
        }
    }
};

const FilterStyled = styled(FilterBaseComponent)`
    padding: 10px;
    box-sizing: border-box;
    
    input[type="text"] {
        margin-left: 10px;
    }
`;

export default connect(null, mapDispatchToProps)(FilterStyled);