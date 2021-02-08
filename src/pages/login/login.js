import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './login.scss'
import img from '../../static/img/login-img.jpg'
import userImg from '../../static/img/user-img.png'
import { Input, Tooltip, Button, Form } from 'antd'
import {
  EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, UserOutlined,
  GoogleOutlined, TwitterOutlined, KeyOutlined
} from '@ant-design/icons';




export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      Password: ""
    }
  }
  // 处理登录逻辑
  login = e => {
    console.log("-----------------------")
  }

  render() {
    return (
      <div className="login">
        <div className="login-content">
          <div className="login-img">
            <img src={img} alt="" />
          </div>
          <div className="login-input">
            <h1>Welcome  Back!</h1>
            <div className="description">please login to your acount!</div>
            <img src={userImg} alt="" className="user" />
            <div className="input-form">
              <Form>
                <Form.Item>
                  <Input
                    className="login-in"
                    placeholder="Enter your username"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                      <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      </Tooltip>
                    }
                  />
                </Form.Item>
                <Form.Item>
                  <Input.Password
                    className="login-in"
                    placeholder="input password"
                    prefix={<KeyOutlined className="site-form-item-icon" />}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" className="login-btn" onClick={this.login}>Login</Button>
                </Form.Item>
              </Form>
            </div>
            <div className="connect">
              <a href="#"><TwitterOutlined className="icons" /></a>
              <a href="#"><GoogleOutlined className="icons" /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export default connect(null,null)(Login)