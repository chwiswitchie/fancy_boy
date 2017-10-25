import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Filter.styles';
import Icon from '../icon/Icon';
import Checkbox from '../checkbox/Checkbox';

class Filter extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selections: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
  };

  static defaultProps = {
    icon: '',
  };

  renderOptions() {
    const { options, onClick, selections } = this.props;

    return options.map((option) => {
      const checked = selections.includes(option);

      return (
        <Checkbox
          key={`checkbox-${option}`}
          checked={checked}
          label={option}
          onClick={onClick}
        />
      );
    });
  }

  render() {
    const { icon, title } = this.props;

    return (
      <div className={css(styles.filter)}>
        <div className={css(styles.header)}>
          <Icon icon={icon} />
          <span className={css(styles.title)}>
            {title}
          </span>
        </div>
        {this.renderOptions()}
      </div>
    );
  }
}

export default Filter;
