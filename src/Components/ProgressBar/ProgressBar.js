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
    progress: PropTypes.number
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    progress: 0
  }

  render() {
    const { className, theme, progress, style,  ...restProps } = this.props;
    return (
        <div className={`progress-bar ${ className } ${ theme }`}>
          <div className="progress"
               style={{ 'width': `${ progress }%`, ...style }}
               { ...restProps }
          />
        </div>
    );
  }

}
