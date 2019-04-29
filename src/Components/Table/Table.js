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
    className: PropTypes.string,
    /** Table headers */
    headers: PropTypes.array,
    /** Table Content */
    content: PropTypes.array,
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    headers: [],
    content: [[]]
  }

  constructor(props) {
    super(props)
    this.state ={
      headers: undefined,
    }
  }

  componentDidMount(){
    var headers = this.props.headers.map((header, index) =>
      <th key={`table-header-${index}`}>{header}</th>
    );

    var content =
      this.props.content.map((content, index) =>
        <tr key={`table-tr-${index}`}>
          {
            content.map((item, index) =>
              <td key={`table-td-${index}`}>
                {item}
              </td>
            )
          }
        </tr>
      );

    this.setState({headers: headers, content: content});

  }

  render() {
    return (
      <table className={`table ${this.props.theme}`}>
        <thead>
          <tr>
            { this.state.headers && this.state.headers }
          </tr>
        </thead>
        <tbody>
          {
            this.props.content.map((content, index) =>
              <tr key={`table-tr-${index}`}>
                {
                  content.map((item, index) =>
                    <td key={`table-td-${index}`}>
                      {item}
                    </td>
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }

}
