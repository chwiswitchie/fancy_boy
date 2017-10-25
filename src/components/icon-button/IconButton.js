import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './IconButton.styles';
import Icon from '../icon/Icon';

class IconButton extends Component {
  static propTypes = {
    icon: PropTypes.string, //.isRequired,
    onClick: PropTypes.func, //.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  };

  static defaultProps = {
    disabled: false,
    type: 'primary',
  };

  render() {
    const { disabled, icon, onClick, type } = this.props;

    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={css(
          styles.button,
          styles[type],
          disabled && styles.disabled,
        )}
      >
        <Icon icon={icon} />
      </button>
    );
  }
}

export default IconButton;
