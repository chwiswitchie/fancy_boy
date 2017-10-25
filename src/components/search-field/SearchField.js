import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './SearchField.styles';
import Icon from '../icon/Icon';

class SearchField extends Component {
  static propTypes = {
    icon: PropTypes.string,
    onSearchChange: PropTypes.func,
    title: PropTypes.string,
    searchTerm: PropTypes.string,
 };

  static defaultProps = {};

  render() {
    const { icon, onSearchChange, title, searchTerm } = this.props;

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.header)}>
          <Icon icon={icon} />
          <span className={css(styles.title)}>
            {title}
          </span>
        </div>
        <input
          className={css(styles.field)}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by name"
          type="text"
          value={searchTerm}
        />
      </div>
    );
  }
}

export default SearchField;
