import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * RawButton component.
 */

export default class RawButton extends Component {
  static propTypes = {
    /** Default React className */
    className: PropTypes.string,
    /** Button value */
    value: PropTypes.string,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Button color */
    color: PropTypes.oneOf(['jewel', 'pink', 'light-blue', 'light-green', 'purple', 'light-yellow']),
    /** onClick function */
    onClick: PropTypes.func,
    /** Button border */
    border: PropTypes.bool,
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    style: 'default-style',
    border: true
  }


  render() {
    return (
        <input className={`button ${this.props.className} ${this.props.theme} ${this.props.color} ${ !this.props.border && 'dis-border' }`}
               value={this.props.value}
               onClick={this.props.onClick}
               type="submit"
        />
    );
  }
}
