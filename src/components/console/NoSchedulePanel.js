import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Console.styles';
import Button from '../button/Button';

class NoSchedulePanel extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={css(styles.noSchedule)}>
        <div className={css(styles.title)}>
          No order scheduled
        </div>
        <div className={css(styles.body)}>
          Don't go hungry! Schedule a food truck.
        </div>
        <Link to="/search">
          <Button
            onClick={() => {}}
            label={'Schedule'}
          />
        </Link>
      </div>
    );
  }
}

export default NoSchedulePanel;
