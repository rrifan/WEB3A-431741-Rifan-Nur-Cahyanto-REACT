import React, { Component } from 'react'; 
import { Layout, Row, Col, Avatar } from 'antd'; 
import '../App.css' 
import { Link } from 'react-router-dom';
import TopMenu from './header.js'
import { UserOutlined } from '@ant-design/icons';

const key = 'updatable';



const { Content, Header } = Layout; 

const image1 = require(`../img/1.jpg`); 



const Profile = () => {
    return(
        <Layout>
            
            <Header style={{padding:10, background:'white'}}>
                <TopMenu> </TopMenu>
            </Header>
            <Content style={{padding:20, textAlign: 'center'}}>
                <Row>
                    <Col span={12} offset={6}>
                    <div>
                    <Avatar
                        src={image1}
                        alt="Home 1"
                        /> 
                    </div>
                    </Col>
                </Row>
            </Content>
            <Content style={{padding:10, textAlign: 'center'}}>
            <Row>
                <Col span={12} offset={6}>
                    <div>
                        <span style={{fontSize : "36px"}}><h1>Jogjaku</h1></span>
                        <span >Yogyakarta terbuat dari rindu</span>
                    </div>
                </Col>
            </Row>
                    
                    
                
                    
                    
                        
                
        </Content>


            
        </Layout>
    );
}

export default Profile;