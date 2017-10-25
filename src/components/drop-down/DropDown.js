import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './DropDown.styles';
import Icon from '../icon/Icon';

class DropDown extends Component {
  static propTypes = {
    selection: PropTypes.string,// .isRequired,
    options: PropTypes.arrayOf(
      PropTypes.string
    ), //.isRequired,
  };

  static defaultProps = {};

  renderOptions() {
    const { options } = this.props;

    return options.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      ); 
    });
  }

  render() {
    const { onChange, selection } = this.props;

    return (
      <div className={css(styles.container)}>
        <select
          className={css(styles.select)}
          defaultValue={selection}
          onChange={(e) => onChange(e.target.value)}
        >
          {this.renderOptions()}
        </select>
        <div className={css(styles.icon)}>
          <Icon icon='chevron-down'/>
        </div>
      </div>
    );
  }
  
}

export default DropDown;
