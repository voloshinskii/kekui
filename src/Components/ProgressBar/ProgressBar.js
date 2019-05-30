import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * ProgressBar component.
 */

export default class ProgressBar extends Component {
  static propTypes = {
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Default React className */
    className: PropTypes.string,
    /** Progress in percent */
    progress: PropTypes.number,
    /** ProgressBar height */
    height: PropTypes.number,
    /** ProgressBar animated color change */
    colored: PropTypes.bool
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    progress: 0,
    height: 14
  }

  render() {
    const { height, colored, className, theme, progress, style,  ...restProps } = this.props;
    return (
        <div className={`progress-bar ${ colored && 'colored' } ${ className } ${ theme }`} style={{ height: height }}>
          <div className={`progress step-${ Math.floor(progress/20) }`}
               style={{ 'width': `${ progress }%`, ...style }}
               { ...restProps }
          />
        </div>
    );
  }

}
