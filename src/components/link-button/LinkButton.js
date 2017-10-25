import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './LinkButton.styles';

class LinkButton extends Component {
  static propTypes = {
    href: PropTypes.string, //.isRequired,
    label: PropTypes.string, //.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    const { disabled, href, label } = this.props;

    return (
      <a
        className={css(
          styles.link,
          disabled && styles.disabled,
        )}
        href={href}
        target={'_blank'}
      >
        {label}
      </a>
    );
  }
}

export default LinkButton;
