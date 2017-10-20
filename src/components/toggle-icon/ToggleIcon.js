import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './ToggleIcon.styles';
import Icon from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/icon/Icon.js';

class ToggleIcon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    isActive: false,
  };

  render() {
    const { disabled, isActive, icon, onClick } = this.props;

    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={css(
          styles.icon,
          isActive && styles.isActive,
          disabled && styles.disabled,
        )}
      >
        <Icon icon={icon} />
      </button>
    );
  }
}

export default ToggleIcon;
