import React, { Component } from 'react';
import * as moment from 'moment';
import Calendar from '../calendar/Calendar.js';

class CalendarPage extends Component {

  state = {
    month: moment(),
    selected: moment().startOf('day')
  };

  select = (day) => {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
    });
  };

  render() {
    return (
      <div>
        <h1>CalendarPage</h1>
        <Calendar
          daysWithPendingEvents={[2, 24]}
          daysWithSchedEvents={[1, 4, 6, 13, 22, 27, 30]}
          month={this.state.month}
          select={this.select}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default CalendarPage;
