import React, { Component } from 'react';
import LinkButton from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/link-button/LinkButton.js';

class LinkButtonPage extends Component {
  
  onClick = () => console.log('onClick');

  render() {
    return (
      <div>
        <h2>LinkButton</h2>
          <LinkButton
            href={'#'}
            label={'Click me!'}
          />
        <h2>Example</h2>
          <div>
            <span>By signing up, you have read and agree to our </span>
            <LinkButton
              href={'#'}
              label={'Terms of Use'}
            />
            <span>.</span>
          </div>
      </div>
    );
  }

}

export default LinkButtonPage;
