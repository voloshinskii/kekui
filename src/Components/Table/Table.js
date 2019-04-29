import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Table component.
 */

export default class Table extends Component {
  static propTypes = {
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Default React className */
    className: PropTypes.string
    /** Message text */
  }
  static defaultProps = {
    className: null,
    theme: 'dark'
  }

  render() {
    return (
      <table className="table light">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Contact</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Company">Alfreds Futterkiste</td>
            <td data-label="Contact">Maria Anders</td>
            <td data-label="Country">Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
      </table>
    );
  }

}
