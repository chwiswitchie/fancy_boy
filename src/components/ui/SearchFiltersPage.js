import React, { Component } from 'react';
import SearchFilters from '../search-filters/SearchFilters.js';
import dummyFilters from '../search-filters/dummyFilters.js';

class SearchFiltersPage extends Component {

  state = {
    cuisineSelections: ['American', 'Indian'],
    priceSelections: ['$'],
  };


  onClickCuisine = (e) => {
    const option = e.currentTarget.id;
    const { cuisineSelections} = this.state;
    const index = cuisineSelections.indexOf(option);

    if (cuisineSelections.includes(option)) {
      let newCuisineSelections = cuisineSelections.slice(); 
      newCuisineSelections.splice(index, 1);
      this.setState({cuisineSelections: newCuisineSelections});
    } else {
      cuisineSelections.push(option);
      this.setState({cuisineSelections: cuisineSelections});
    };

  };

  onClickPrice = (e) => {
    const option = e.currentTarget.id;
    const { priceSelections} = this.state;
    const index = priceSelections.indexOf(option);

    if (priceSelections.includes(option)) {
      let newPriceSelections = priceSelections.slice(); 
      newPriceSelections.splice(index, 1);
      this.setState({priceSelections: newPriceSelections});
    } else {
      priceSelections.push(option);
      this.setState({priceSelections: priceSelections});
    };

  };

  render() {
    return (
      <div>
        <h1>SearchFilters</h1>
          <SearchFilters
            cuisineOptions={dummyFilters.cuisines}
            priceOptions={dummyFilters.price}
            onClickPrice={this.onClickPrice}
            onClickCuisine={this.onClickCuisine}
            priceSelections={this.state.priceSelections}
            cuisineSelections={this.state.cuisineSelections}
          />
      </div>
    );
  }
}

export default SearchFiltersPage;
