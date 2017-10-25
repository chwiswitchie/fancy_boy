import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Console.styles';

class SchedulePanel extends Component {
  static propTypes = {
    order: PropTypes.shape({
      // vendorId: PropTypes.number,
      vendorName: PropTypes.number,
      vendorEmail: PropTypes.string,
      vendorPhone: PropTypes.number,
      // orderId: PropTypes.number,
      startTime: PropTypes.number,
      endTime: PropTypes.number,
      orderSize: PropTypes.number,
    }), // .isRequired
  };

  static defaultProps = {};

  render() {
    const {
      vendorName,
      // vendorEmail,
      vendorPhone,
      // orderId,
      startTime,
      endTime,
      orderSize,
    } = this.props.order;

    return (
      <div className={css(styles.schedule)}>
        <div>{vendorName}</div>
        <div>{vendorPhone}</div>
        <div>
          <div>{startTime}</div>
          <div>{endTime}</div>          
        </div>
        <div>{orderSize}</div>

      </div>
    );
  }
}

export default SchedulePanel;
