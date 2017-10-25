import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string, //.isRequired,
  };

  static defaultProps = {};

  render() {
    return <i className={`fa fa-${this.props.icon}`} aria-hidden="true"></i>;
  }
}

export default Icon;
