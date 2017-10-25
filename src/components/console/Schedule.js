import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import * as moment from 'moment';
import styles from './Console.styles';
import NoSchedulePanel from './NoSchedulePanel';
import SchedulePanel from './SchedulePanel';

const order = {
  vendorId: 100,
  vendorName: 'Patrizi’s Italian Restaurant',
  vendorEmail: 'patrizi@example.com',
  vendorPhone: '5125224834',

  orderId: 200,
  startTime: '13',
  endTime: '15',
  orderSize: '150',

  businessId: 300,
  businessName: 'Catbug Enterprises',
  businessEmail: 'catbug@example.com',
  businessPhone: '5555555555',
};

class Schedule extends Component {
  static propTypes = {
    selected: PropTypes.instanceOf(moment).isRequired,
  };

  static defaultProps = {};

  renderPanels() {
    const { daysWithSchedEvents, selected } = this.props;
    const hasOrder = daysWithSchedEvents.includes(selected.date());

    if (hasOrder) {
      return <SchedulePanel order={order} />
    }

    return <NoSchedulePanel />
  };

  render() {
    const { selected } = this.props;

    return (
      <div>
        <div className={css(styles.header)}>
          { moment(selected).format('dddd') }
          <span>, </span>
          { moment(selected).format('LL') }
        </div>
        {this.renderPanels()}
      </div>
    );
  }
}

export default Schedule;
