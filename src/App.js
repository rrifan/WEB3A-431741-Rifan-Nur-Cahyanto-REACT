import React from 'react';
import './App.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App(){
  return(
    <div class= "App">
    <Layout>
      <Header style={{background:'blue'}}>Header</Header>
      <Layout>
        <Sider style={{background:'white'}}>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
