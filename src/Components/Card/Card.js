import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Card component.
 */

export default class Card extends Component {
  static propTypes = {
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Default React className */
    className: PropTypes.string,
    /** Card shadow */
    shadow: PropTypes.bool,
    /** Card color */
    color: PropTypes.oneOf(['jewel', 'pink', 'light-blue', 'light-green', 'purple', 'light-yellow'])
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    shadow: false
  }

  render() {
    return (
      <div className={`card ${ this.props.shadow && 'withshadow' } ${this.props.theme} ${this.props.color} ${this.props.className}`}>
          {this.props.children}
      </div>
    );
  }
}
