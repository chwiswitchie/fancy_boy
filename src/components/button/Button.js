import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Button.styles';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string, //.isRequired,
    onClick: PropTypes.func, //.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'text']),
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    type: 'primary',
  };

  render() {
    const {
      disabled,
      label,
      onClick,
      type,
    } = this.props;

    return (
      <button
        disabled={this.props.disabled}
        onClick={onClick}
        className={css(
          styles.button,
          styles[type],
          disabled && styles.disabled,
        )}
      >
        {label}
      </button>
    );
  }
}

export default Button;
