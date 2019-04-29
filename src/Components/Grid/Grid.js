import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Grid component.
 */

export default class Grid extends Component {
  static propTypes = {
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Default React className */
    className: PropTypes.string
    /** Message text */
  }
  static defaultProps = {
    className: null,
    theme: 'dark'
  }

  render() {
    return (
        <div className={`grid ${this.props.className} ${this.props.theme}`}>
          {this.props.children}
        </div>
    );
  }

}
