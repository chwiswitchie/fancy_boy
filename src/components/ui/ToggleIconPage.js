import React, { Component } from 'react';
import ToggleIcon from '../toggle-icon/ToggleIcon.js';

class ToggleIconPage extends Component {
  
  onClick = () => console.log('onClick');

  render() {
    return (
      <div>
        <h2>ToggleIcon</h2>
          <ToggleIcon
            icon={'truck'}
            onClick={this.onClick}
          />
          <ToggleIcon
            icon={'bell'}
            onClick={this.onClick}
            type={'secondary'}
          />
          <ToggleIcon
            icon={'calendar'}
            onClick={this.onClick}
            type={'tertiary'}
          />
      </div>
    );  
  }
}

export default ToggleIconPage;
