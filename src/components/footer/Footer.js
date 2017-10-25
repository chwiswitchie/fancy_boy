import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Footer.styles';

class Footer extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={css(styles.footer)}>
        <Link to="www.google.com" className={css(styles.text)}>
          Truck Yourself
        </Link>
         <span className={css(styles.text)}> © 2017</span>
      </div>
    );
  }
}

export default Footer;
