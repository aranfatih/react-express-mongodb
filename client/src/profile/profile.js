import React, { Component } from 'react';
import Header from '../header';
import { dimensions } from '../base_styles';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{margin: dimensions.dl3}}>
          <h2>{this.props.match.params.username}</h2>
        </div>
      </div>
    );
  }
}