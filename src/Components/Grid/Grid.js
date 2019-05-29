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
    className: PropTypes.string,
    /** Grid type */
    type: PropTypes.oneOf([null, 'features', 'form-banner', 'featured-sales']),
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    type: null,
  }

  render() {
    const { className, theme, type, children, ...restProps } = this.props;
    return (
        <div className={ `grid ${ className } ${ theme } ${ type }` } { ...restProps }>
          { children }
        </div>
    );
  }

}
