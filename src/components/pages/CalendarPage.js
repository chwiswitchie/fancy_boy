import React, { Component } from 'react';
import Calendar from '/Users/jennifer/Desktop/chwis_witchie/app/my-app/src/components/calendar/Calendar.js';
import * as moment from 'moment';

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
