import './index.scss'
import React from 'react'
import { Component } from 'react'
import { connect } from "react-redux"
import { Menu, Switch, Button, Divider, Layout } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import $, { camelCase } from 'jquery'


import Header from '../../pages/index/header/header'
import Sider from 'antd/lib/layout/Sider';


// import menuConf from './menu/menuconf'
const { SubMenu } = Menu


export default class Index extends Component {
  state = {
    theme: 'light',
    current: '1',
    collapsed: false,
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    /**
     * 注意这里后续补充flex-shrink属性替换这部分内容
     */
    if (this.state.collapsed) {
      $("#switch").css('display', "block")
    } else {
      $("#switch").css('display', "none")
    }
  };
  componentWillMount() {

  }




  render() {
    return (
      <div className="main">
        <div  className = 'left-content'>
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode="inline"
            className="menu"
            inlineCollapsed={this.state.collapsed}
          >
            <div className="tools">
              <Switch
                checked={this.state.theme === 'dark'}
                onChange={this.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
                id="switch"
              />
              <Button type="primary" onClick={this.toggleCollapsed} className="collapsebutton">
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
            </div>
            <Divider className="divider" />
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="right-content">
          <Header/>
        </div>
      </div>
    );
  }
}