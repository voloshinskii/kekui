import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Checkbox
 */

export default class Checkbox extends Component {
  static propTypes = {
    /** Checkbox label. You can pass string, number or element */
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element
    ]),
    /** Default React className */
    className: PropTypes.string,
    /** Component id */
    id: PropTypes.number,
    /** Component name */
    name: PropTypes.string,
    /** Checkbox value */
    checked: PropTypes.bool,
    /** onChange function */
    onChange: PropTypes.func,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Checkbox id. Random as default */
    id: PropTypes.string,
    /** Checkbox color */
    color: PropTypes.oneOf(['light-blue', 'default'])
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    checked: undefined,
    id: false,
    color: 'default',
  }

  constructor(props) {
    super(props)
    this.state ={
      id: 1,
    }
  }

  componentDidMount(){
    var id = (this.props.id) ? this.props.id : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.setState({id: id});
  }

  render() {
    const { label, color, theme, className, style, ...restProps } = this.props;
    return (
      <div className={`field checkbox ${ color } ${ theme } ${ className }`}>
        <input
          id={this.state.id}
          type="checkbox"
          style={{ display: 'none', ...style }}
          { ...restProps }
        />
        <label htmlFor={ this.state.id }>{ label }</label>
      </div>
    );
  }
}
