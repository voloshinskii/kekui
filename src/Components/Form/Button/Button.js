import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RawButton from '../RawButton/RawButton';

/**
 * Button component.
 */

export default class Button extends Component {

  static propTypes = {
    /** Default React className */
    className: PropTypes.string,
    /** Button value */
    value: PropTypes.string,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Button color */
    color: PropTypes.oneOf(['jewel', 'pink', 'light-blue', 'light-green', 'purple', 'light-yellow', 'primary', 'secondary']),
    /** onClick function */
    onClick: PropTypes.func,
    /** position */
    position: PropTypes.oneOf(['left', 'right']),
    /** Button border */
    border: PropTypes.bool,
    /** Button state: disabled or not */
    disabled: PropTypes.bool,
    /** show spinner */
    loading: PropTypes.bool,
    /** show as container */
    div: PropTypes.bool
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    border: false,
  }

  render() {
    const { className, position, color, disabled, ...restProps } = this.props;
    return (
        <div className="field flex">
            <RawButton
                className= {`
                    ${ className }
                    ${ position }
                    ${ color }
                    ${ disabled && 'disabled' }
                `}
                { ...restProps }
          />
        </div>
    );
  }
}
