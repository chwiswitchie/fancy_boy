import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './ListItem.styles';
import Button from '../button/Button';
import LinkButton from '../link-button/LinkButton';
import cuisineTypes from './cuisineTypes';

class ListItem extends Component {

  static propTypes = {
    bookImmediately: PropTypes.bool,
    cuisines: PropTypes.arrayOf(PropTypes.oneOf(cuisineTypes)),
    name: PropTypes.string,
    priceRange: PropTypes.string,
    thumbnail : PropTypes.string,
    website : PropTypes.string,
  };

  static defaultProps = {};

  renderMenuButton() {
    return (
      <Button
        label='Menu'
        onClick={() => {}}
        type='text'
      />
    );
  };

  renderBookingButton() {
    return this.props.bookImmediately ? (
      <Button
        label='Book'
        onClick={() => {}}
      />
    ) : (
      <Button
        label='Request'
        onClick={() => {}}
        type='secondary'
      />
    ); 
  };
  
  render() {
    const {
      name,
      priceRange,
      thumbnail,
    } = this.props;
    const cuisines = this.props.cuisines.join(', ');
    const website = this.props.website.replace('www.', '');

    return (
      <div className={css(styles.listItem)}>
        <img
          alt={name}
          src={thumbnail}
          className={css(styles.thumbnail)}
        />
        <div className={css(styles.content)}>
          <div>
            <LinkButton
              href={'#'}
              label={name}
            />
            <div className={css(styles.info)}>
              {priceRange} · {cuisines}
            </div>
            <a
              className={css(styles.website)}
              href={website}
              target={'_blank'}
            >
              {website}
            </a>
          </div>
          <div>
          { this.renderBookingButton() }
          { this.renderMenuButton() }
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
