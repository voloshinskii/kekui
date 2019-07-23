import React, { Component } from 'react';
import PropTypes from 'prop-types';
import spinner from '../../../assets/Style/Images/spinner.svg'

/**
 * RawButton component.
 */
const spin = <img alt="loading" src={spinner}/>;
export default class RawButton extends Component {
  static propTypes = {
    /** Default React className */
    className: PropTypes.string,
    /** Button value */
    value: PropTypes.string,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Button color */
    color: PropTypes.oneOf(['jewel', 'pink', 'light-blue', 'light-green', 'purple', 'light-yellow']),
    /** onClick function */
    onClick: PropTypes.func,
    /** Button border */
    border: PropTypes.bool,
    /** show spinner */
    loading: PropTypes.bool
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    template: 'default-style',
    border: true
  }


  render() {
    const { div, template, value, loading, className, theme, color, border, ...restProps } = this.props;
    return (
        <div>
          {div &&
            <div
                className={`button ${loading && 'disabled'} ${className} ${theme} ${color} ${!border && 'dis-border'} ${template} `}
                type="submit"
                {...restProps}
            >
              {loading ? spin : value}
            </div>
          }
          {!div &&
            <button
                className={`button ${loading && 'disabled'} ${className} ${theme} ${color} ${!border && 'dis-border'} ${template} `}
                type="submit"
                {...restProps}
            >
              {loading ? spin : value}
            </button>
          }
        </div>
    );
  }
}
