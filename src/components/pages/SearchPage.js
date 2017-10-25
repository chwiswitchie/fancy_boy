import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar.js'
import SearchFilters from '../search-filters/SearchFilters.js';
import dummyFilters from '../search-filters/dummyFilters.js';
import ListItem from '../list-item/ListItem.js';
import Pagination from '../pagination/Pagination.js';
import dummyFoodTrucks from '../list-item/dummyFoodTrucks.js';

class SearchPage extends Component {
  state = {
    cuisineSelections: ['American', 'Indian'],
    priceSelections: ['$'],

    searchTerm: '',
  
    limit: 10,
    start: 0,
    totalResults: 103,
  };

  renderListItems() {
    return dummyFoodTrucks.map((truck) => (
      <ListItem
        key={truck.id}
        bookImmediately={truck.bookImmediately}
        cuisines={truck.cuisines}
        id={truck.id}
        name={truck.name}
        priceRange={truck.priceRange}
        thumbnail={truck.thumbnail}
        website={truck.website}
      />
    ));
  };

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <SearchFilters
          onSearchChange={this.onSearchChange}
          searchTerm={this.state.searchTerm}
          cuisineOptions={dummyFilters.cuisines}
          priceOptions={dummyFilters.price}
          onClickPrice={this.onClickPrice}
          onClickCuisine={this.onClickCuisine}
          priceSelections={this.state.priceSelections}
          cuisineSelections={this.state.cuisineSelections}
        />
        <div>
          <SearchBar />
          <Pagination
            limit={this.state.limit}
            onPageChange={this.onPageChange}
            start={this.state.start}
            totalResults={this.state.totalResults}
          />
          <div style={{width: '100%', height: '50%', overflowY: 'scroll',
            borderBottom: `1px solid lightgrey`, borderTop: `1px solid lightgrey`}}>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    );
  }


// SearchFilters

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

  // Pagination
  
  onPageChange = (start) => {
    this.setState({start});
  };

  // SearchBar
  onSearchChange = (searchTerm) => {
    this.setState({searchTerm});
  };

}

export default SearchPage;
