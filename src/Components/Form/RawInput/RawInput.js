import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * RawInput.
 */

export default class RawInput extends Component {

  static propTypes = {
    /** Input label */
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element
    ]),
    /** Default React className */
    className: PropTypes.string,
    /** Component id */
    id: PropTypes.number,
    /** Component name */
    name: PropTypes.string,
    /** Input value */
    value: PropTypes.string,
    /** onChange function */
    onChange: PropTypes.func,
    /** onBlur function */
    onBlur: PropTypes.func,
    /** Input placeholder */
    placeholder: PropTypes.string,
    /** Input type */
    type: PropTypes.string,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Input error text */
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element
    ]),
  }

  static defaultProps = {
    className: null,
    theme: 'dark'
  }


  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input id={this.props.id}
               name={this.props.name}
               value={this.props.value}
               onChange={this.props.onChange}
               onBlur={this.props.onBlur}
               className={`input ${this.props.className} ${this.props.theme}`}
               placeholder={this.props.placeholder}
               type={this.props.type}
        />
      <div className="error-text">{this.props.error}</div>
      </div>
    );
  }
}
