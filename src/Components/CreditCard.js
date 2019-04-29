import React, { Component } from 'react';

import mc from '../assets/Style/Images/mastercardlogo.svg';
import visa from '../assets/Style/Images/visa.svg';
import mir from '../assets/Style/Images/mir.svg';
import card from '../assets/Style/Images/card.svg';

class CardBrand extends Component {

  showLogo(type){
    switch(type) {
      case 'mastercard':
        return(
          <img className="ccard-logo" src={mc}/>
        );
        break;

      case 'visa':
        return(
          <img className="ccard-logo" src={visa}/>
        );
        break;


      case 'mir':
        return(
          <div className="mir">
            <img className="ccard-logo" src={mir}/>
          </div>
        );
        break;


      default:
        return(
          <img className="ccard-logo" src={card}/>
        );
        break;
    }
  }

  render() {
    return (
        <div class="field flex" style={{height:"50px"}}>
          {this.showLogo(this.props.type)}
        </div>
    );
  }

}

export {
  CardBrand
}
