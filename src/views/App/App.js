import React, { Component } from 'react';

import Header from '../../components/Header/Header'
import Recipes from '../../containers/Recipes/Recipes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Recipes />
      </div>
    );
  }
}

