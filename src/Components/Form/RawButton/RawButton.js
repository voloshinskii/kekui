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
    template: 'default-style',
    border: true
  }


  render() {
    const { template, className, theme, color, border, ...restProps } = this.props;
    return (
        <input className={ `button ${ className } ${ theme } ${ color } ${ !border && 'dis-border' } ${ template } ` }
               type="submit"
               { ...restProps }
        />
    );
  }
}
