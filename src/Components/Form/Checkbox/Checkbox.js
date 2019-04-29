import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RawInput from '../RawInput/RawInput';

/**
 * Checkbox
 */

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({target}){
    var active = !this.state.active;
    active ? console.log("checkbox - on") : console.log("checkbox - off");
    this.setState({active: active});
  }

  static propTypes = {
    /** Checkbox label */
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
      <div className={`checkbox light-blue ${this.props.theme}`}>
        <input
          id="checkbox"
          type="checkbox"
          style={{display: "none"}}
          checked={this.state.active}
          onChange={this.handleClick}
        />
        <label htmlFor="checkbox">Make my profile visible</label>
      </div>
    );
  }
}
