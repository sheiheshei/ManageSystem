import React from 'react';
import ReactDOM from 'react-dom';
// import {createStoreHook} from "react-redux"
import './index.css';
import App from './App';
import $ from 'jquery'
import {withRouter} from 'react-router-dom'


/**
 * 这里渲染元素，就是调用render函数,注意需要全局使用的东西在这里使用import导入。
 */




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);








