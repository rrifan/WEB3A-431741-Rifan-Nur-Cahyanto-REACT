import React from 'react';
import './App.css';
import {Layout, Menu, Row, Col, Carousel } from 'antd';
import TopMenu from './component/header';
import Comnt from './component/comment';
import { Tag } from 'antd';




  const { SubMenu } = Menu;
  const { Header, Footer, Content } = Layout;


  function log(e) {
    console.log(e);
  }
  
  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }

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
              Kota Yogyakarta</h3>
              <p><br></br>Yogyakarta (sering juga disebut Yogya, Jogjakarta, atau Jogja) adalah destinasi wisata paling populer di Indonesia setelah Bali 
                          Bagi banyak orang Indonesia, Jogja adalah semacam kampung halaman kedua. Mungkin karena ratusan ribu orang pernah tinggal di sini bertahun-tahun ketika kuliah. Mungkin juga karena semua orang diterima seperti di rumah sendiri ketika di Yogyakarta. Joko Pinurbo, penyair terkemuka Indonesia, mengatakannya dengan indah, "Yogya terbuat dari rindu, pulang, dan angkringan."</p>
              </div>
              
            </Col>
          
            <Col  span={12} offset={2}>
                <Carousel autoplay>
                  <div >
                    <img alt="Tugu" src='./img/1.jpg' />
                  </div>
                  <div>
                    <img alt="Malioboro" src="./img/2.jpg"/>
                  </div>
                  <div>
                  <img alt="wedangronde" src="./img/3.jpg"/>
                  </div>
                  <div>
                  <img alt="tamansari" src="./img/4.jpg"/>
                  </div>
                </Carousel>
            </Col>
          </Row>
        </Content>


        <Content>
          <Col span={12}>
            <div className="text2">
              <h3>Wisata Yogyakarta</h3>
                <p>Pariwisata di Jogja selalu meningkat disetiap tahunnya.
                  Jogja menjadi magnet bagi para wisatawan baik dari manca ataupun domestik
                  untuk selalu rindu berlibur ke Jogja. Ada banyak alasan mengapa wisatawan senang menghabiskan waktu liburan di Jogja,
                  yaitu Biaya murah,transportasi mudah, banyak kuliner, banyak spot wisata alam,Budaya,Pendidikan,Sejarah dan masih banyak lagi. 
                </p>
                <br></br>
              <div>
                      <Tag>
                        <a href="https://garasijogja.com/tempat-wisata-jogja-terbaru"> Wisatajogja</a></Tag>
                <Tag>
                  <a href="https://github.com/ant-design/ant-design/issues/1862">Kuliner</a>
                </Tag>
                <Tag closable onClose={log}>
                  kota
                </Tag>
                <Tag closable onClose={preventDefault}>
                  jogja
                </Tag>
              </div>
            </div>
          </Col>
        </Content>
        <Content style={{paddingLeft:20}}>
        <Comnt> </Comnt>
        </Content>
      
        <Footer style={{textAlign: 'center', background:'#639a67', color: '#ffffff' }}>
          Jogjaku 
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
