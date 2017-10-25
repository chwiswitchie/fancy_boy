import React, { Component } from 'react';
import Console from '../console/Console.js';
import * as moment from 'moment';

class ConsolePage extends Component {

  state = {
    selected: moment().startOf('day')
  };

  render() {
    return (
      <div>
        <h1>ConsolePage</h1>
        <Console
          selected={this.state.selected}
          activeTab={'schedule'}
          daysWithSchedEvents = {[1, 4, 6, 13, 22, 27, 30]}
          daysWithPendingEvents = {[2, 24]}
        />
      </div>
    );
  }
}

export default ConsolePage;
