import React, { Component } from 'react';
import IconButton from '../icon-button/IconButton.js';

class IconButtonPage extends Component {
  
  onClick = () => console.log('onClick');

  render() {
    return (
      <div>
        <h2>IconButton</h2>
          <IconButton
            icon={'truck'}
            onClick={this.onClick}
          />
          <IconButton
            icon={'bell'}
            onClick={this.onClick}
            type={'secondary'}
          />
          <IconButton
            icon={'calendar'}
            onClick={this.onClick}
            type={'tertiary'}
          />
      </div>
    );  
  }
}

export default IconButtonPage;
