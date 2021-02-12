import { Component } from "react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { Avatar, Input, Badge, Image, Popover } from 'antd'
import userMessages from '../mock'
import './header.scss'
import { UserOutlined, BellOutlined, BellFilled, BellTwoTone, MessageFilled } from "@ant-design/icons";
import userLogo from "../../../static/img/头像.png";
import Scrollbars from 'react-custom-scrollbars'
import Item from "antd/lib/list/Item";
import _ from 'lodash'



const { Search } = Input


function Content(props) {
  return (
    <div className="massages">
      <HashRouter>
        <ul className="message-type">
          <NavLink to="/notice"><li>通知{props.userMessages.noticeList.length == 0 ? "" : `(${props.userMessages.noticeList.length})`}</li></NavLink>
          <NavLink to="/message"><li>消息{props.userMessages.messageList.length == 0 ? "" : `(${props.userMessages.messageList.length})`}</li></NavLink>
          <NavLink to="/task"><li>待办{props.userMessages.taskList.length == 0 ? "" : `(${props.userMessages.taskList.length})`}</li></NavLink>
        </ul>
        <Switch>
          <Route path="/notice" render={
            routeProps => (<Notice {...routeProps} noticeList={props.userMessages.noticeList} />)
          } />
          <Route path="/message" render={
            routeProps => (<Message {...routeProps} messageList={props.userMessages.messageList} />)
          } />
          <Route path="/task" render={
            routeProps => (<Task {...routeProps} taskList={props.userMessages.taskList} />)
          } />
        </Switch>
      </HashRouter>
    </div>
  )
}

function Notice(props) {
  return (
    <div>{JSON.stringify(props.noticeList)}</div>
  )
}

function Message(props) {
  return (
    <div>{JSON.stringify(props.messageList)}</div>
  )
}

function Task(props) {
  return (
    
    <Scrollbars style ={{height: 'calc(100% - 39px)',marginTop:4}}>
      <ul className="userinfo-list">
        {
          props.taskList.map((item, index) => (
            <li className="userinfo-item" key={index}>
              <div className='userinfo-descr'>
                <div className='userinfo-tittle'>{item.title}</div>
                <div className='userinfo-time'>{new Date().toLocaleDateString()}</div>
              </div>
              <div className='userinfo-content'>
                {item.content}
              </div>
            </li>
          ))
        }

      </ul>
    </Scrollbars>

  )
}




export default class Header extends Component {


  constructor(props) {
    super(props);
    this.state = {
      userMessages: ""
    }
  }
  componentDidMount() {
    this.setState(() => ({
      userMessages: userMessages
    }))
  }



  render() {
    return (
      <div className="header-content" >
        <div className="header-tools">
          <Search className="search" placeholder="input search text" onSearch={this.onSearch} enterButton />
        </div>
        <div className="sys-name">React组件</div>
        <div className="user-info">
          <Avatar src={userLogo} className="user-logo" shape="square" icon={<UserOutlined />} />
          <div className="user-message-wrapper">
            <Popover placement="bottomRight" content={<Content userMessages={this.state.userMessages} />} trigger="click">
              <Badge count={100}  >
                <a href="#" className="head-example" >
                  <BellTwoTone className="user-message" />
                </a>
              </Badge>
            </Popover>
          </div>
        </div>
      </div>
    )
  }
}