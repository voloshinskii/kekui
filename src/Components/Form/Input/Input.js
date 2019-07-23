import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RawInput from '../RawInput/RawInput';

/**
 * input with label.
 */

export default class Input extends Component {
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
    /** Additional props for error div */
    errorRestProps: PropTypes.object,
  }
  static defaultProps = {
    className: null,
    theme: 'dark'
  }

  render() {
    const { label, error, errorRestProps, ...restProps } = this.props;
    return (
        <div className="field">
          { label &&
            <label>{label}</label>
          }
          <RawInput { ...restProps } />
        <div className="error-text" { ...errorRestProps } >{ error }</div>
        </div>
    );
  }
}
