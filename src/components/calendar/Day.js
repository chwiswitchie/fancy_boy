import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import * as moment from 'moment';
import styles from './Day.styles';

class Day extends Component {

  static propTypes = {
    day: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
        isCurrentMonth: PropTypes.bool,
        isToday: PropTypes.bool,
        date: PropTypes.instanceOf(moment),
      }),
    selected: PropTypes.instanceOf(moment).isRequired,
    // daysWithPendingEvents: PropTypes.arrayOf(PropTypes.number),
    // daysWithSchedEvents: PropTypes.arrayOf(PropTypes.number),
    select: PropTypes.func.isRequired,
  };

  static defaultProps = {
    daysWithPendingEvents:[],
    daysWithSchedEvents:[],
  };

  render() {
    const { day, select, selected } = this.props;
    const { date, isCurrentMonth, isToday, number } = day;
    const selectedDay = moment(date._d).isSame(selected._d);
    const pastDate = moment(date._d).diff(new Date(), 'days') < 0;
    const hasPendingEvent = this.props.daysWithPendingEvents.includes(number);
    const hasSchedEvent = this.props.daysWithSchedEvents.includes(number);

    return (
      <div 
        key={number} 
        onClick={() => select(day)}
        className={css(
          styles.day,
          isToday && styles.isToday,
          pastDate && styles.pastDate,
        )}
      >
        <div className={css(
          selectedDay && styles.selectedDay,
          isCurrentMonth && hasPendingEvent && styles.hasPendingEvent,
          isCurrentMonth && hasSchedEvent && styles.hasSchedEvent,
        )}>
          <div className={css(styles.number)}>{number}</div>
        </div>
      </div>
    );
  }
}

export default Day;
