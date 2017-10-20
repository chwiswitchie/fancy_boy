import React, { Component } from 'react';
import Checkbox from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/checkbox/Checkbox.js';

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
