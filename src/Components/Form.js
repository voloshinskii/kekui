import React, { Component } from 'react';

class FewInputs extends Component {

  constructor(props) {
        super(props);
        this.renderInputs = this.renderInputs.bind(this);
    }

  renderInputs(){
     const inputslist = this.props.inputs.map((input, index) =>
        <div className="field" key={index} >{input}</div>
     );
     return(inputslist);
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <div className={`fields i-${this.props.count}`}>
          {this.renderInputs()}
        </div>
      </div>
    );
  }

}

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
  FewInputs,
  Button,
  RawButton
}
