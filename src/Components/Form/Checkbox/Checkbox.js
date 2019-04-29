import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RawInput from '../RawInput/RawInput';

/**
 * Checkbox
 */

export default class Checkbox extends Component {
  static propTypes = {
    /** Checkbox label */
    label: PropTypes.string,
    /** Default React className */
    className: PropTypes.string,
    /** Component id */
    id: PropTypes.number,
    /** Component name */
    name: PropTypes.string,
    /** Checkbox value */
    checked: PropTypes.bool,
    /** onChange function */
    onChange: PropTypes.func,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    checked: undefined,
  }

  render() {
    return (
      <div className={`checkbox light-blue ${this.props.theme} ${this.props.className}`}>
        <input
          id="checkbox"
          type="checkbox"
          style={{display: "none"}}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <label htmlFor="checkbox">{this.props.label}</label>
      </div>
    );
  }
}
