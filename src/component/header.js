import React from 'react';
import { Menu } from 'antd';
import { Row, Col} from 'antd';
import {
    HomeOutlined,
    ProfileOutlined,
    SettingOutlined,
  } from '@ant-design/icons';
  
  const { SubMenu } = Menu;

  class TopMenu extends React.Component {
    state = {
      current: 'home',
    };
  
    handleClick = e => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };
  
    render() {
      return (
        <div className="menu-container">
              <Row justify="space-between">
                  <Col span={4}>
                      <h1>Atap Negeri</h1>
                  </Col>
                  <Col span={8}>
                              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="mail">
                                  <HomeOutlined />
                                  Beranda
                                </Menu.Item>
                                <Menu.Item key="app">
                                  <ProfileOutlined />
                                  Profil
                                </Menu.Item>
                                <SubMenu
                                  title={
                                    <span className="submenu-title-wrapper">
                                      <SettingOutlined />
                                      Pengaturan
                                    </span>
                                  }
                                >
                                  <Menu.ItemGroup>
                                    <Menu.Item key="setting:1">Tampilan</Menu.Item>
                                    <Menu.Item key="setting:2">Tentang</Menu.Item>
                                  </Menu.ItemGroup>
                                </SubMenu>
                              </Menu>
                  </Col>
              </Row>
        </div>
      );
    }
  }
  
export default TopMenu