
import React, { Component } from 'react'
import { Menu, Switch } from 'antd';
import $ from 'jquery'
import { Scrollbars } from 'react-custom-scrollbars';
import { withRouter } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import menuConf from './menuconf'
import './menu.scss'
import logo from "../../../static/img/logo.png";


const { SubMenu } = Menu
const { Item } = Menu


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuConf: []
    }
  }

  componentDidMount() {
    this.getMenuData();
  }
  // 异步导入，后期后端有数据可以使用axios获取后端数据
  getMenuData() {
    import('./menuconf').then(data => {
      this.setState({
        theme: 'dark',
        current: '1',
        collapsed: false,
        menuConf: data.default
      })
    })
  }

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  //菜单点击选项，给选中的菜单添加样式
  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  //菜单底部工具栏收缩工能
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

  // 路由跳转，跳转之前的校验功能可以在这里实现
  itemClick = (e) => {
    this.props.history.push(e.item.props.to)
  }


  getMenu = menuConf => {
    return (
      menuConf.map((item, index) => {
        if (item.subMenus !== undefined && item.subMenus.length != 0) {
          return (
            <SubMenu
              key={item.key}
              icon={<item.icon />}
              title={item.tittle}
            >
              {this.getMenu(item.subMenus)}
            </SubMenu>
          )
        } else {
          return (
            <Item
              key={item.key}
              onClick={this.itemClick}
              icon={<item.icon />}
              to={item.to}
            >
              {item.tittle}
            </Item>
          )
        }
      })
    )
  }


  render() {
    return (
        <div className="left-content" style={this.state.theme == "dark" ? { backgroundColor: "#001529", color: '#FFF' } : { backgroundColor: 'white' }}>
          <div className="logo-outer">
            <div className="logo" id="logo">
              <img src={logo} alt="" title="" />
              <span>ant design pro</span>
            </div>
          </div>
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
              {this.getMenu(menuConf)}
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
        </div>
    );
  }
}

export default withRouter(Index)

