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
    const { label, className, theme, error, ...restProps } = this.props;
    return (
      <div>
        <label>{ label }</label>
        <input className={ `input ${ className } ${ theme }` } { ...restProps } />
        <div className="error-text">{ error }</div>
      </div>
    );
  }
}
