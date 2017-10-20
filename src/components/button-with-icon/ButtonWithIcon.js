import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './ButtonWithIcon.styles';
import Icon from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/icon/Icon.js';

class ButtonWithIcon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    const {
      disabled,
      icon,
      label,
      onClick,
    } = this.props;

    return (
      <button
        disabled={this.props.disabled}
        onClick={onClick}
        className={css(
          styles.button,
          disabled && styles.disabled,
        )}
      >
        <Icon icon={icon} />
        <span className={css(styles.label)}>{label}</span>
      </button>
    );
  }
}

export default ButtonWithIcon;
