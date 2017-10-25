import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './NavBar.styles';
import Icon from '../icon/Icon';

class NavBar extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={css(styles.navBar)}>
        <Link to="/dashboard">
          <div className={css(styles.icon)}>
            <Icon icon={'truck'} />
          </div>
        </Link>
      </div>
    );
  }
}

export default NavBar;
