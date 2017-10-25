import React, { Component } from 'react';
import * as moment from 'moment';
import Calendar from '../calendar/Calendar.js';
import Console from '../console/Console.js';
import ControlPanel from '../control-panel/ControlPanel.js'

const daysWithSchedEvents = [1, 4, 6, 13, 22, 27, 30];
const daysWithPendingEvents = [2, 24];

class DashboardPage extends Component {

  state = {
    activeTab: 'schedule',
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
        <ControlPanel
          activeTab={this.state.activeTab}
          avatar={'http://placehold.it/500x500'}
          name={'Catbug Enterprises'}
          setActiveTab={this.setActiveTab}
          size={200}
          type={'business'}
        />
        <div style={{display: 'flex'}}>
          <Calendar
            daysWithPendingEvents={daysWithPendingEvents}
            daysWithSchedEvents={daysWithSchedEvents}
            month={this.state.month}
            select={this.select}
            selected={this.state.selected}
          />
          <Console
            daysWithPendingEvents={daysWithPendingEvents}
            daysWithSchedEvents={daysWithSchedEvents}
            selected={this.state.selected}
            activeTab={this.state.activeTab}
          />
        </div>
     </div>
    );
  }

  // ControlPanel
  setActiveTab = (activeTab) => {
    this.setState({activeTab});
  };
}

export default DashboardPage;
