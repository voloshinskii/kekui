import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Form component.
 */

export default class Form extends Component {
  static propTypes = {
    /** Default React className */
    className: PropTypes.string,
    /** form children */
    children: PropTypes.any,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Template name */
    template: PropTypes.oneOf(['default-style']),
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    template: 'default-style'
  }

  render() {
    const { template, className, children, ...restProps } = this.props;
    return (
      <div className={ `form ${ template } ${ className }` } { ...restProps }>
          { children }
      </div>
    );
  }
}
