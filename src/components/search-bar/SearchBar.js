import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './SearchBar.styles';
import ButtonWithIcon from '../button-with-icon/ButtonWithIcon.js';
import DatePicker from '../date-picker/DatePicker.js';
import TimeDropDown from '../drop-down/TimeDropDown';


class SearchBar extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={css(styles.container)}>
        <TimeDropDown />
        <DatePicker />
        <ButtonWithIcon
          onClick={() => console.log('onClick')}
          icon={'truck'}
          label={'Find a truck'}
        />
      </div>
    );
  }
}

export default SearchBar;
