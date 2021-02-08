import { withRouter } from "react-router-dom"
import {connect} from 'react-redux'
import {Component} from 'react'


class  Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      // 注意调用的时候使用的是props
      <h1>{this.props.value}</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.value
  }
}

export default connect(mapStateToProps)(Home)
// export default Home






/**
 * 需要使用location、history的时候使用，元素必须在Router标签内部使用
 */
// export default withRouter(Home)
