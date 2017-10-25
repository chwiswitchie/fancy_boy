import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Calendar.styles';
import * as moment from 'moment';
import Week from './Week';
import Icon from '../icon/Icon';

class Calendar extends Component {

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

  state = {
    month: this.props.month,
  };

  previous = () => {
    const { month } = this.props;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  };

  next = () => {
    const { month } = this.props;

    this.setState({
      month: month.add(1, 'month'),
    });
  };
  
  renderWeeks() {
    const { select, selected, month } = this.props;
    let count = 0;
    let date = this.props.month.clone().startOf("month").add("w" -1).day("Sunday");
    let done = false;
    let monthIndex = date.month();
    let weeks = [];

    while (!done) {
      weeks.push(
        <Week
          key={date} 
          date={date.clone()} 
          daysWithPendingEvents={this.props.daysWithPendingEvents}
          daysWithSchedEvents={this.props.daysWithSchedEvents}
          month={month} 
          pastIsReadOnly={this.props.pastIsReadOnly}
          select={(day)=>select(day)} 
          selected={selected}
        />
      );

      date.add(1, "w");
      
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };


  renderDayNames () {
    return (
      <div className={css(styles.week)}>
        <div className={css(styles.dayName)}>Sun</div>
        <div className={css(styles.dayName)}>Mon</div>
        <div className={css(styles.dayName)}>Tue</div>
        <div className={css(styles.dayName)}>Wed</div>
        <div className={css(styles.dayName)}>Thu</div>
        <div className={css(styles.dayName)}>Fri</div>
        <div className={css(styles.dayName)}>Sat</div>
      </div>
    );
  };

  renderHeader() {
    const { month, pastIsReadOnly } = this.props;
    const currentMonth = moment().month() === month.month();

    return (
      <div
        className={css(
          styles.header,
          !pastIsReadOnly && styles.headerSpacing,
        )}
      >
        <div
          onClick={this.previous} 
          className={css(
            styles.icon,
            pastIsReadOnly && currentMonth && styles.hidden,
          )}
        >
          <Icon icon={'chevron-left'} />
        </div>
        { month.format("MMMM YYYY") }
        <div
          onClick={this.next} 
          className={css(styles.icon)}
        >
          <Icon icon={'chevron-right'} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={css(styles.calendar)}>
        <div>
          {this.renderHeader()}
          {this.renderDayNames()}
        </div>
        {this.renderWeeks()}
      </div>
    );
  }

}

export default Calendar;
