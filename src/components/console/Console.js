import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import * as moment from 'moment';
import styles from './Console.styles';
import Schedule from './Schedule';

class Console extends Component {
  static propTypes = {
    selected: PropTypes.instanceOf(moment),
    activeTab: PropTypes.oneOf(['schedule']),
  };

  state = {
    selected: '',
  };

  static defaultProps = {};

  renderCarets() {
    const { activeTab } = this.props;
    const tabs = [ 'schedule', 'notifications', 'orders', 'profile'];

    return tabs.map((tab) => {
      return (
        <div className={css(
          styles.caret,
          activeTab !== tab && styles.hidden,
        )}>
          <div className={css(styles.innerCaret)} />
        </div>

      );
    });
  };

  render() {
    const { activeTab, daysWithSchedEvents, selected } = this.props;

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.carets)}>
          {this.renderCarets()}
        </div>
        <div className={css(styles.console)}>
          { activeTab === 'schedule' && <Schedule selected={selected} daysWithSchedEvents={daysWithSchedEvents} /> }
          { activeTab === 'notifications' && <div>Notifications</div>}
          { activeTab === 'profile' && <div>Profile</div>}
        </div>
      </div>
    );
  }
}

export default Console;
