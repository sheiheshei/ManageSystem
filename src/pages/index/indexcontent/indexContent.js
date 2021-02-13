import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Switch,HashRouter,Route } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';


// 样式文件
import './indexContent.scss'

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
      <div className="content" style={{ height: 'calc(100vh - 55px)'}}>
        {/* 滚动条 */}
        <Scrollbars className="outer">
          {/* 滚动内容区域，也是展示内容的主要区域 */}
          <div className="inner">
            <Switch>
              <HashRouter basename='/main'>
                <Route
                  path='/home'
                  render = {props => (
                    <h1>Home</h1>
                  )}
                >
                </Route>
              </HashRouter>
            </Switch>
          </div>
        </Scrollbars>
      </div>
    )
  }
}

//组件内部可以使用history，location，params等对象
export default withRouter(IndexContent)