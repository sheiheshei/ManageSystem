
import React from 'react'
import { Component } from 'react'
import { connect } from "react-redux"
import BScroll from "better-scroll";
import { Menu, Switch, Button, Divider, Layout } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import $ from 'jquery'
// import PerfectScrollbar from 'perfect-scrollbar';
import { Scrollbars } from 'react-custom-scrollbars';




import './index.scss'
import logo from "../../static/img/logo.png";


import Header from '../../pages/index/header/header'
import Sider from 'antd/lib/layout/Sider';
import { ScrollBar } from 'better-scroll';

// import menuConf from './menu/menuconf'
const { SubMenu } = Menu


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BScroll: ""
    }
  }

  componentDidMount() {
    // const wrapper = document.querySelector(".menu")
    // const scroll = new BScroll(wrapper, {
    //   click: true,
    //   // scrollX: true,
    //   scrollY: true
    // })
  }



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
    // $("#logo").toggleClass("logo");
    $("#logo").toggleClass("logo-mini");
    $("#menu-tools").toggleClass("menu-tools-collapse")

  };





  render() {
    return (
      <div className="main" >
        <div className="left-content" style={this.state.theme == "dark" ? { backgroundColor: "#001529", color: '#FFF' } : { backgroundColor: 'white' }}>
          <div className="logo-outer">
            <div className="logo" id="logo">
              <img src={logo} alt="" title="" />
              <span>ant design pro</span>
            </div>
          </div>
          {/* <div className="menu"> */}
          <Scrollbars className="menu" style={{ height: 'calc(100vh - 68px - 40px)' }}>
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
              className="main-menu"
              inlineCollapsed={this.state.collapsed}
            >
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
          </Scrollbars>

          <div className={`menu-tools`} id="menu-tools"
            style={this.state.theme == "dark" ? { backgroundColor: "#001529" } : { backgroundColor: 'white' }}>
            <div className="collapse-btn" onClick={this.toggleCollapsed}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </div>

            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
              id="switch"
              size="small"
              style={{ fontSize: '4px' }}
            />
          </div>
          {/* </div> */}

        </div>
        <div className="right-content">
          <Header />
          <div className="content" style={{ height: 'calc(100vh - 55px)', width: '100vw - 230px' }}>
            <Scrollbars className="outer" style={{ width: 300, height: 300 }}>
              <div className="inner"></div>
            </Scrollbars>
          </div>
        </div>
      </div>
    );
  }
}


function Logo(props) {
  return (
    <img src={logo} alt="" />
  )
}