import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RawInput from '../RawInput/RawInput';

/**
 * input with label.
 */

export default class Input extends Component {
  static propTypes = {
    /** Input label */
    label: PropTypes.string,
    /** Default React className */
    className: PropTypes.string,
    /** Component id */
    id: PropTypes.number,
    /** Component name */
    name: PropTypes.string,
    /** Input value */
    value: PropTypes.string,
    /** onChange function */
    onChange: PropTypes.func,
    /** Input placeholder */
    placeholder: PropTypes.string,
    /** Input type */
    type: PropTypes.string,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
  }
  static defaultProps = {
    className: null,
    theme: 'dark'
  }

  render() {
    return (
        <div className="field">
          <label>{this.props.label}</label>
          <RawInput id={this.props.id}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    theme={this.props.theme}/>
        </div>
    );
  }
}
