import React, { Component } from 'react';
import TimeDropDown from '../drop-down/TimeDropDown.js';
import DatePicker from '../date-picker/DatePicker.js';

class DropDownPage extends Component {

  render() {
    return (
      <div>
        <h1>DropDownPage</h1>
        <h2>TimeDropDown</h2>
          <TimeDropDown />
        <h2>DatePicker</h2>
          <DatePicker />
      </div>
    );
  }
}

export default DropDownPage;
