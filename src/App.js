import './App.css';
import 'antd/dist/antd.css';
import Home from './components/Home'
import Button from './components/Button'
import { Router, Route, Switch, Link, HashRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import store from '../src/store/index'

import Login from './pages/login/login'
import Index from './pages/index/index'

// 最顶层的组件，主要由其他组件组成
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch >
          <Route path="/" component={Index}></Route>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
