import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './Calendar.styles';
import * as moment from 'moment';
import Week from './Week';
import ToggleIcon from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/toggle-icon/ToggleIcon.js';

class Calendar extends Component {

  static propTypes = {
    month: PropTypes.instanceOf(moment).isRequired,
    selected: PropTypes.instanceOf(moment).isRequired,
    // daysWithPendingEvents: PropTypes.arrayOf(PropTypes.number),
    // daysWithSchedEvents: PropTypes.arrayOf(PropTypes.number),
    select: PropTypes.func.isRequired,
  };

  static defaultProps = {
    daysWithPendingEvents:[],
    daysWithSchedEvents:[],
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
    const { month } = this.props;
    return (
      <div className={css(styles.header)}>
        <ToggleIcon
          icon={'arrow-left'}
          onClick={this.previous} 
          className={css(styles.icon)}
        />
        { month.format("MMMM YYYY") }
        <ToggleIcon
          icon={'arrow-right'}
          onClick={this.next} 
          className={css(styles.icon)}
        />
      </div>
    );
  };

  render() {
    return (
      <div>
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
