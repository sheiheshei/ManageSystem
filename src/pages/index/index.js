
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import LeftMenu from "./menu/menu.js";
import Header from '../../pages/index/header/header'
import IndexContent from "./indexcontent/indexContent";

import './index.scss'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuConf: []
    }
  }

  render() {
    return (
      <div className="main" >
        <LeftMenu/>
        <div className="right-content">
          <Header />
          <IndexContent />
        </div>
      </div>
    );
  }
}

export default withRouter(Index)

