import React, { Component } from 'react';


class RawButton extends Component {

  render() {
    return (
        <input className={`button ${this.props.className}`} value={this.props.value} onClick={this.props.onClick} type="submit"/>
    );
  }

}

class Button extends Component {

  render() {
    return (
        <div className="field flex">
          <label>{ this.props.label }</label>
          <RawButton className={`${this.props.className} ${this.props.position}`} value={this.props.value} onClick={this.props.onClick}/>
        </div>
    );
  }

}

export {
  Button,
  RawButton
}
