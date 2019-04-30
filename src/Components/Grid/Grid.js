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
    return (
        <div className={`grid ${this.props.className} ${this.props.theme} ${this.props.type}`}>
          {this.props.children}
        </div>
    );
  }

}
