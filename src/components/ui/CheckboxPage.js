import React, { Component } from 'react';
import Checkbox from '../checkbox/Checkbox.js';

class CheckboxPage extends Component {
  state = {
    checked: true,
  };

  onClick = () => this.setState({checked: !this.state.checked});

  render() {
    return (
      <div>
        <h2>Checkbox</h2>
        <Checkbox
          label={'Checkbox'}
          checked={this.state.checked}
          onClick={this.onClick}
        />
        <Checkbox
          label={'Checkbox'}
          checked={!this.state.checked}
          onClick={this.onClick}
        />
        <Checkbox
          disabled
          label={'Checkbox'}
          checked={this.state.checked}
          onClick={this.onClick}
        />
        <Checkbox
          disabled
          label={'Checkbox'}
          checked={!this.state.checked}
          onClick={this.onClick}
        />
      </div>    
    );
  }
}

export default CheckboxPage;
