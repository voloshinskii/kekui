import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RawButton from '../RawButton/RawButton';

/**
 * Button component.
 */

export default class Button extends Component {

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
    /** position */
    position: PropTypes.oneOf(['left', 'right']),
    /** Button border */
    border: PropTypes.bool,
    /** Button state: disabled or not */
    disabled: PropTypes.bool
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    border: true,
  }

  render() {
    return (
        <div className="field flex">
          <RawButton border={this.props.border}
                     className={`${this.props.className} ${this.props.position} ${this.props.color} ${this.props.disabled && 'disabled'}`}
                     value={this.props.value}
                     onClick={this.props.onClick}
          />
        </div>
    );
  }
}
