import { Component, useState } from "react";
import { withRouter } from "react-router-dom";

class Outer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.children)
  }
  render() {
    return (
      <div className='outertest'></div>
    )
  }
}

class Inner extends Component {
  render() {
    return (
      <div className='innertest'>shenme</div>
    )
  }
}
Outer = withRouter(Outer)
Inner = withRouter(Inner)

function Test(props) {

  const [count, setCount] = useState(0)
  
  

  return(
    <>
      <h1>{ count }</h1>
      <button onClick = { () => setCount(count + 1) }>add</button>
    </>

  )
  
}


export default withRouter(Test);