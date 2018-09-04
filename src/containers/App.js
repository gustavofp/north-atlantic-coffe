import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../containers/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import ItemList from '../containers/ItemList/ItemList';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Content>
            <Header />
            <ItemList />
          </Content>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
