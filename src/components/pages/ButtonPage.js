import React, { Component } from 'react';
import Button from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/button/Button.js';

class ButtonPage extends Component {
  
  onClick = () => console.log('onClick');

  render() {
    return (
      <div>
        <h2>Button</h2>
          <h3>Primary Button</h3>
            <Button
              label='Primary'
              onClick={this.onClick}
            />
          <h3>Secondary Button</h3>
            <Button
              label='Secondary'
              onClick={this.onClick}
              type='secondary'
            />
          <h3>Text Button</h3>
            <Button
              label='Text'
              onClick={this.onClick}
              type='text'
            />
        <h2>Example</h2>
          <Button
            label='Confirm'
            onClick={this.onClick}
          />
          <Button
            label='Cancel'
            onClick={this.onClick}
            type='text'
          />
      </div>    
    );
  }
}

export default ButtonPage;
