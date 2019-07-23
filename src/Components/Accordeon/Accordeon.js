import React, { Component } from 'react';
import arrow from '../../assets/Style/Images/arrow.svg'

export default class Accordeon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.show = this.show.bind(this);
  }

  show(){
    this.setState({show : !this.state.show});
  }

  render() {
    return (
        <div>
            <button onClick={(e) => this.show(e)} className="button--no-style arrow-container">
              <h2>{this.props.label}  <img className={`arrow ${!this.state.show && 'to-right'} hover`} src={arrow}/></h2>
            </button>
          <div className={`accordeon ${this.props.className} ${this.state.show && 'show'}`}>
            {this.props.children}
          </div>
        </div>
    );
  }
}
