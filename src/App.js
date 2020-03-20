import React from 'react';
import './App.css';
import {Layout, Menu, Row, Col, Carousel } from 'antd';
import TopMenu from './component/header';



  const { SubMenu } = Menu;
  const { Header, Footer, Content } = Layout;
  const carauselImage = [
    {
      alt: 'semeru'
    },
    {
      alt: 'rinjani'
    },
    {
      alt: 'sumbing'
    },
    {
      alt: 'merbabu'
    },
  ]

function App(){
  return(
    <div class= "App">
      <Layout>
        <Header  style={{padding:10, background:'white'}}>
          <TopMenu> </TopMenu>
        </Header>

        <Content style={{padding:10, textAlign: 'center', background:'#d9bf77' }}>
          <Row>
          <Col span={10} >
            <div className= "text" >
            <h3 style={{textAlign: 'center'}}> 
            Gunung</h3>
            <p><br></br>Gunung adalah sebuah bentuk tanah yang menonjol di atas wilayah sekitarnya. 
              Gunung adalah bagian dari permukaan bumi yang menjulang lebih tinggi dibandingkan dengan daerah sekitarnya. Sebuah gunung biasanya lebih tinggi dan curam dari sebuah bukit, tetapi ada kesamaaan, dan penggunaan sering tergantung dari adat lokal</p>
            </div>
            
          </Col>
          
        <Col  span={12} offset={2}>
            <Carousel autoplay>
              <div >
                <img alt="gunung" src='./img/img.jpg' />
              </div>
              <div>
                <img alt="prau" src="./img/img4.jpg"/>
              </div>
              <div>
              <img alt="rakum" src="./img/img5.jpg"/>
              </div>
              <div>
              <img alt="semeru" src="./img/rakum.jpg"/>
              </div>
            </Carousel>
        </Col>
        </Row>
        </Content>
        <div>

        </div>


        <Content>
          <h3>12345</h3>
        </Content>
      
      
        <Footer style={{textAlign: 'center', background:'#639a67', color: '#ffffff' }}>
          AtapNegeri @rifann
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
