import React, { Component } from 'react';
import TermsInfo from './components/TermsInfo';

export default class Help extends Component {
  static displayName = 'Help';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="help-page" style={{margin: '30px 15%'}}>
        <TermsInfo />
      </div>
    );
  }
}
