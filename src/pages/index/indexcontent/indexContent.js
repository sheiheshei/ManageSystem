import { Component } from "react";
import { Switch, HashRouter, Route ,withRouter} from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';


// 自己写的组件
import StepAll from "./nav/steps";
import BasicForm from "./form/basicform"
import  Test from "../test/test";

// 样式文件
import './indexContent.scss'
import { GithubFilled } from "@ant-design/icons";

// 网站的主要内容区域
class IndexContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      // 设置内容区域大小
      <div className="content" style={{ height: 'calc(100vh - 55px)' }}>
        {/* 滚动条 */}
        <Scrollbars className="outer" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          {/* 滚动内容区域，也是展示内容的主要区域 */}
          <div className="inner">
            <Switch>
              <HashRouter basename=''>
                <Route
                  path='/main/steps'
                  render={props => (
                    <StepAll></StepAll>
                  )}
                >
                </Route>
                <Route
                  path='/form/basic'
                  render={props => (
                    <BasicForm></BasicForm>
                  )}
                ></Route>
                <Route
                  path='/test/children'
                  render={props => (
                    <Test></Test>
                  )}
                ></Route>
              </HashRouter>
            </Switch>
          </div>
          <div className="footer">
            <div className="footer-top">
              <div style = {{float: 'left'}}>Ant Design Pro</div>
              <GithubFilled className = 'github'/>
              <div style = {{float: 'right'}}>Ant Design</div>
            </div>
            <div className="footer-bottom" >
            Copyright <span className = 'copyright'>C</span> 2020 蚂蚁金服体验技术部出品
            </div>
          </div>
        </Scrollbars>
      </div>
    )
  }
}

//组件内部可以使用history，location，params等对象
export default withRouter(IndexContent)