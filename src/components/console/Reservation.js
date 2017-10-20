import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import * as moment from 'moment';
import styles from './Console.styles';
import NoReservationPanel from './NoReservationPanel';

class Reservation extends Component {
  static propTypes = {
    selected: PropTypes.instanceOf(moment).isRequired,
  };

  static defaultProps = {};

  render() {
    const { selected } = this.props;

    return (
      <div>
        <div className={css(styles.header)}>
          { moment(selected).format('LL') }
        </div>
        <NoReservationPanel />
      </div>
    );
  }
}

export default Reservation;
