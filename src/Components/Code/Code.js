import React, { Component } from 'react';


/**
 * Code
 */

export default class Code extends Component {
  static propTypes = {
    /**  Component children */
    children: PropTypes.any.isRequired,
    /** Default React className */
    className: PropTypes.string,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),

  }
  static defaultProps = {
    className: null,
    theme: 'dark',
  }

  render() {
    return (
      <code className={`code ${this.props.color} ${this.props.theme} ${this.props.className}`}>
        {this.props.children}
      </code>
    );
  }
}
