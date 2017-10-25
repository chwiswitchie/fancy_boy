import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DashboardPage from './components/pages/DashboardPage.js';
import SearchPage from './components/pages/SearchPage.js';

import WelcomePage from './components/ui/WelcomePage.js';
import ButtonPage from './components/ui/ButtonPage.js';
import CalendarPage from './components/ui/CalendarPage.js';
import CheckboxPage from './components/ui/CheckboxPage.js';
import ConsolePage from './components/ui/ConsolePage.js';
import DropDownPage from './components/ui/DropDownPage.js';
import FilterPage from './components/ui/FilterPage.js';
import IconButtonPage from './components/ui/IconButtonPage.js';
import LinkButtonPage from './components/ui/LinkButtonPage.js';
import ListItemPage from './components/ui/ListItemPage.js';
import PaginationPage from './components/ui/PaginationPage.js';
import SearchFiltersPage from './components/ui/SearchFiltersPage.js';
import ToggleIconPage from './components/ui/ToggleIconPage.js';

import Footer from './components/footer/Footer.js';
import NavBar from './components/nav-bar/NavBar.js';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div style={{paddingTop: 43}}>
            <Switch>
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/search" component={SearchPage} />

              <Route exact path="/" component={WelcomePage} />
              <Route path="/button" component={ButtonPage} />
              <Route path="/calendar" component={CalendarPage} />
              <Route path="/checkbox" component={CheckboxPage} />
              <Route path="/console" component={ConsolePage} />
              <Route path="/drop-down" component={DropDownPage} />
              <Route path="/filter" component={FilterPage} />
              <Route path="/icon-button" component={IconButtonPage} />
              <Route path="/link-button" component={LinkButtonPage} />
              <Route path="/list-item" component={ListItemPage} />
              <Route path="/pagination" component={PaginationPage} />
              <Route path="/search-filters" component={SearchFiltersPage} />
              <Route path="/toggle-icon" component={ToggleIconPage} />
            </Switch>
          <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
