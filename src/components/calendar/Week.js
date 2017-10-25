import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import * as moment from 'moment';
import styles from './Calendar.styles';
import Day from './Day';

class Week extends Component {

  static propTypes = {
    month: PropTypes.instanceOf(moment), //.isRequired,
    select: PropTypes.func, //.isRequired,
    selected: PropTypes.instanceOf(moment), //.isRequired,
    // daysWithPendingEvents: PropTypes.arrayOf(PropTypes.number),
    // daysWithSchedEvents: PropTypes.arrayOf(PropTypes.number),
    pastIsReadOnly: PropTypes.bool,
  };

  static defaultProps = {
    daysWithPendingEvents:[],
    daysWithSchedEvents:[],
    pastIsReadOnly: false,
  };

  render() {
    const { pastIsReadOnly, month, selected, select } = this.props;
    let { date } = this.props;
    let days = [];

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };

      days.push(
        <Day
          key={date.toString()}
          day={day}
          daysWithPendingEvents={this.props.daysWithPendingEvents}
          daysWithSchedEvents={this.props.daysWithSchedEvents}
          pastIsReadOnly={this.props.pastIsReadOnly}
          selected={selected}
          select={select}
        />
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div
        key={date._d.toString()}
        className={css(
          styles.week,
          !pastIsReadOnly && styles.weekSpacing,
        )}
      >
        {days}
      </div>
    );
  }
}

export default Week;
