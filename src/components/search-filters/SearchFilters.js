import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../filter/Filter';
import SearchField from '../search-field/SearchField';

class SearchFilters extends Component {
  static propTypes = {
    cuisineOptions: PropTypes.array,
    cuisineSelections: PropTypes.array,
    onClickCuisine: PropTypes.func,
    onClickPrice: PropTypes.func,
    onSearchChange: PropTypes.func,
    priceOptions: PropTypes.array,
    priceSelections: PropTypes.array,
    searchTerm: PropTypes.string,
  };

  static defaultProps = {
    searchTerm: '',
  };

  render() {

    return (
      <div>
        <Filter
          icon={'spoon'}
          onClick={this.props.onClickCuisine}
          options={this.props.cuisineOptions}
          selections={this.props.cuisineSelections}
          title={'Cuisine'}
        />
        <Filter
          icon={'money'}
          onClick={this.props.onClickPrice}
          options={this.props.priceOptions}
          selections={this.props.priceSelections}
          title={'price'}
        />
        <SearchField
          icon={'search'}
          title={'name'}
          searchTerm={this.props.searchTerm}
          onSearchChange={this.props.onSearchChange}
        />
      </div>    
    );
  }
}

export default SearchFilters;
