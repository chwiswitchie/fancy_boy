import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as moment from 'moment';
import { css } from 'aphrodite';
import styles from './DatePicker.styles';
import Icon from '../icon/Icon';
import Calendar from '../calendar/Calendar';

class DateDropDown extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    month: moment(),
    selected: moment().startOf('day'),
    showCalendar: false,
  };

  select = (day) => {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
      showCalendar: false,
    });
  };

  onClick = () => {
    const { showCalendar } = this.state; 
    this.setState({showCalendar: !showCalendar});
  };

  renderCalendar() {
    return (
      <div className={css(styles.container)}>
        <Calendar
          pastIsReadOnly
          month={this.state.month}
          select={this.select}
          selected={this.state.selected}
        />
      </div>
    );
  }

  render() {
    const { selected, showCalendar } = this.state; 

    return (
      <div>
        <div className={css(styles.select)} onClick={this.onClick}>
          {moment(selected).format('LL')}
          <div className={css(styles.icon)}>
            { showCalendar ? <Icon icon='chevron-up'/> : <Icon icon='chevron-down'/> }
          </div>
        </div>
        { showCalendar && this.renderCalendar() }
      </div>
    );
  }
}

export default DateDropDown;
