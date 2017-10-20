import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import * as moment from 'moment';
import styles from './Console.styles';
import Reservation from './Reservation';

class Console extends Component {
  static propTypes = {
    selected: PropTypes.instanceOf(moment).isRequired,
  };

  state = {
    activeTab: 'reservation'
  };

  static defaultProps = {};

  render() {
    const { selected } = this.props;

    return (
      <div className={css(styles.console)}>
        <Reservation 
          selected={selected}
        />
      </div>
    );
  }
}

export default Console;
