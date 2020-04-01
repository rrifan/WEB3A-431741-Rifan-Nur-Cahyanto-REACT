import React from 'react';
import './App.css';
import {Layout, Menu, Row, Col, Carousel } from 'antd';
import TopMenu from './component/header';
import Comnt from './component/comment';
import { Tag } from 'antd';
import Navbar from './app/home-page';
import Routing from './router/router'



class App extends React.Component {
  

  render(){
    return (
      <div className="App">
        <Navbar/>
        <Routing/>
      </div>
    );
  }
  
}

export default App;

