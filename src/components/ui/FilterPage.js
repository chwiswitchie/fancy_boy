import React, { Component } from 'react';
import Filter from '../filter/Filter.js';

const cuisineOptions = [
  'American',
  'Chinese',
  'Mexican',
  'Indian',
  'Vegetarian / Vegan',
];

const priceOptions = ['$', '$$', '$$$'];

class FilterPage extends Component {

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
        <h2>Filter</h2>
        <Filter
          icon={'spoon'}
          onClick={this.onClickCuisine}
          options={cuisineOptions}
          selections={this.state.cuisineSelections}
          title={'Cuisine'}
        />

        <Filter
          icon={'money'}
          onClick={this.onClickPrice}
          options={priceOptions}
          selections={this.state.priceSelections}
          title={'price'}
        />
      </div>    
    );
  }
}

export default FilterPage;
