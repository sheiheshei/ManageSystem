import { connect } from "react-redux"
import addAction from '../store/actions/actions'
import { Component } from 'react'


class Button extends Component {
  constructor(props) {
    super(props)
    this.setState = {}
  }

// 好像必须写成箭头函数，否则失效
  handleClick = () => {
    console.log("value值增加了")
    console.log("props:", this.props)
    this.props.add()
  }

  render() {
    return (
      <button onClick={this.handleClick}>增加</button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: () => {
      dispatch(addAction())
    }
  }
}
export default connect(null, mapDispatchToProps)(Button)