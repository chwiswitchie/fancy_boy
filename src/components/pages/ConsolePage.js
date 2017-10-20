import React, { Component } from 'react';
import Console from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/console/Console.js';
import * as moment from 'moment';

class ConsolePage extends Component {

  state = {
    selected: moment().startOf('day')
  };

  select = (day) => {
    this.setState({
      selected: day.date,
    });
  };

  render() {
    return (
      <div>
        <h1>ConsolePage</h1>
        <Console
          select={this.select}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default ConsolePage;
