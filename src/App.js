import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import WelcomePage from './components/pages/WelcomePage.js';
import ButtonPage from './components/pages/ButtonPage.js';
import IconButtonPage from './components/pages/IconButtonPage.js';
import ToggleIconPage from './components/pages/ToggleIconPage.js';
import LinkButtonPage from './components/pages/LinkButtonPage.js';
import CheckboxPage from './components/pages/CheckboxPage.js';
import FilterPage from './components/pages/FilterPage.js';
import CalendarPage from './components/pages/CalendarPage.js';
import ConsolePage from './components/pages/ConsolePage.js';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/button">Button</Link></li>
            <li><Link to="/icon-button">IconButton</Link></li>
            <li><Link to="/toggle-icon">ToggleIcon</Link></li>
            <li><Link to="/link-button">LinkButton</Link></li>
            <li><Link to="/checkbox">Checkbox</Link></li>
            <li><Link to="/filter">Filter</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/console">Console</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/button" component={ButtonPage} />
            <Route path="/icon-button" component={IconButtonPage} />
            <Route path="/toggle-icon" component={ToggleIconPage} />
            <Route path="/link-button" component={LinkButtonPage} />
            <Route path="/checkbox" component={CheckboxPage} />
            <Route path="/filter" component={FilterPage} />
            <Route path="/calendar" component={CalendarPage} />
            <Route path="/console" component={ConsolePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
