import React, { Component } from 'react';
import arrow from '../assets/Style/Images/arrow.svg'
import '../assets/Style/main.scss';
import '../assets/Style/demo.scss';

class Accordeon extends Component {

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
          <div className={`block p-10 ${this.props.className}`}>
            <button onClick={(e) => this.show(e)} className="button--no-style">
              <h2>{this.props.label}  <img className={`arrow ${!this.state.show && 'to-right'}`} src={arrow}/></h2>
            </button>
          </div>
          <div className={`block accordeon ${this.props.className} ${this.state.show && 'show'}`}>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export {
  Accordeon
}
