import React, { Component } from 'react';
import List from './list';
import dataList from './data';

class App extends Component {
  render() {
    return (
      <div className="panel">
          <List data={dataList} />
      </div>
    );
  }
}

export default App;
