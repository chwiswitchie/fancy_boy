import React, { Component } from 'react';
import ListItem from '../list-item/ListItem.js';

class ListItemPage extends Component {
  render() {
    return (
      <div>
        <ListItem
          bookImmediately={true}
          cuisines={['Korean', 'Mexican', 'Fusion']}
          id={1}
          name={'Chi’lantro BBQ'}
          priceRange={'$'}
          thumbnail={'http://placehold.it/200x200'}
          website={'www.chilantrobbq.com'}
        />

        <ListItem
          bookImmediately={false}
          cuisines={['BBQ', 'Tex-Mex']}
          id={2}
          name={'Valentina’s Tex Mex BBQ'}
          priceRange={'$'}
          thumbnail={'http://placehold.it/200x200'}
          website={'www.valentinastexmexbbq.com'}
        />
      </div>
    );
  }
}

export default ListItemPage;
