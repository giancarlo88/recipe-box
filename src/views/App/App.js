import React, { Component } from 'react';

import Header from '../../components/Header'
import Recipes from '../../containers/Recipes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text='Recipe Box'/>
        <Recipes />
      </div>
    );
  }
}

