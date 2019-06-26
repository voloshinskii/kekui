import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Step component.
 */

export default class Step extends Component {
  static propTypes = {
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Default React className */
    className: PropTypes.string,
    /** Title */
    title: PropTypes.string,
    /** Description */
    description: PropTypes.string,
    /** You can use your own content OR specify title and description */
    children: PropTypes.any
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
  }

  render() {
    const { children, title, description, className, theme, style,  ...restProps } = this.props;
    return (
        <div className={`step ${ className } ${ theme }`}>
          { children }
          {!children &&
            <div className="title">
              { title }
            </div>
            <div className="description">
              { description }
            </div>
        }
        </div>
    );
  }

}
