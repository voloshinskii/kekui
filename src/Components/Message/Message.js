import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Message component.
 */

export default class Message extends Component {
  static propTypes = {
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Default React className */
    className: PropTypes.string,
    /** Message text */
    text: PropTypes.string,
    /** Message type */
    type: PropTypes.oneOf(['success', 'error', 'warning'])
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    text: null
  }

  render() {
    const { className, theme, type, text, children, ...restProps } = this.props;
    return (
        <div className={ `message ${ className } ${ theme } ${ type }` } { ...restProps }>
          { text && <p>{ text }</p> }
          { children }
        </div>
    );
  }

}
