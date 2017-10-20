import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Checkbox.styles';
import Icon from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/icon/Icon.js';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    const { checked, disabled, label, onClick } = this.props;

    return (
      <div
        id={label}
        onClick={onClick} 
        className={css(
          styles.container,
          disabled && styles.disabled,
        )}
      >
        <div
          className={css(
            styles.checkbox,
            checked && styles.checked,
          )}
        >
          { checked && <Icon icon='check' /> }
        </div>
        {label}
      </div>
    );
  }
}

export default Checkbox;
