import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './ControlPanel.styles';
import IconButton from '../icon-button/IconButton';
import capitalize from '../../lib/utils/utils.js';

class ControlPanel extends Component {
  static propTypes = {};
  static defaultProps = {};

  renderButtons() {
    return (
      <div className={css(styles.buttons)}>
        <IconButton
          icon={'calendar'}
          onClick={() => this.props.setActiveTab('schedule')}
        />
        <IconButton
          icon={'bell'}
          onClick={() => this.props.setActiveTab('notifications')}
          type={'secondary'}
        />
        <IconButton
          icon={'file-text'}
          onClick={() => this.props.setActiveTab('orders')}
          type={'tertiary'}
        />
        <IconButton
          icon={'user'}
          onClick={() => this.props.setActiveTab('profile')}
          type={'quarternary'}
        />
      </div>
    );
  }

  renderUserInfo() {
    const { avatar, name, type, size } = this.props;
    return (
      <div className={css(styles.userInfo)}>
        <img
          alt={name}          
          src={avatar}
          className={css(styles.avatar)}
        />
        <div>
          <div className={css(styles.name)}>
            {name}
          </div>
          <div className={css(styles.type)}>
            {capitalize(type)}
            <div>
              <span className={css(styles.size)}>
                {size}
              </span>
              <span> hungry employees</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={css(styles.panel)}>
        {this.renderUserInfo()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default ControlPanel;
