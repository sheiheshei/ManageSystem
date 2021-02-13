
import React,{ Component }  from 'react'
import { Menu, Switch } from 'antd';
import $ from 'jquery'
import { Scrollbars } from 'react-custom-scrollbars';
import { HashRouter, Route, Router, withRouter,Switch as RSwitch } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import menuConf from './menuconf'
import Header from '../../pages/index/header/header'
import IndexContent from "./indexcontent/indexContent";
import './index.scss'
import logo from "../../static/img/logo.png";


const { SubMenu } = Menu


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
      console.log(JSON.stringify(data.default))
      this.setState({
        menuConf: data.default
      })
    })
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

  itemClick = (e) => {
    console.log(e.item.props.to)
    this.props.history.push(e.item.props.to)
  }


  getMenu = menuConf => {
    return (
      <Menu
        theme={this.state.theme}
        onClick={this.handleClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
        className="main-menu"
        inlineCollapsed={this.state.collapsed}
      >
        {
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
                <Menu.Item
                  key={item.key}
                  onClick={this.itemClick}
                  icon={<item.icon />}
                  to={item.to}
                >
                  {item.tittle}
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    )
  }


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
          <Scrollbars className="menu" style={{ height: 'calc(100vh - 68px - 40px)' }}>
            {this.getMenu(menuConf)}
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
        <div className="right-content">
          <Header />
          <IndexContent/>
        </div>
      </div>
    );
  }
}

export default withRouter(Index)

