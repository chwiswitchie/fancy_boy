import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import * as moment from 'moment';
import styles from './Console.styles';
import ButtonWithIcon from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/button-with-icon/ButtonWithIcon.js';

class NoReservationPanel extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {

    return (
      <div className={css(styles.noReservation)}>
        <div className={css(styles.title)}>
          No reservation
        </div>
        <div className={css(styles.body)}>
          Don't go hungry! Schedule a food truck.
        </div>
        <ButtonWithIcon
          onClick={() => console.log('onClick')}
          icon={'truck'}
          label={'Schedule'}
        />
      </div>
    );
  }
}

export default NoReservationPanel;
