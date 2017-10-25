import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DropDown from './DropDown';
import options from './TimeDropDownOptions';

class TimeDropDown extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    selection: '1:00pm',
  };

  onChange = (selection) => {
    this.setState({selection});
  };

  render() {
    return (
      <DropDown
        onChange={this.onChange}
        options={options}
        selection={this.state.selection}
      />
    );
  }
}

export default TimeDropDown;
