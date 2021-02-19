import { Component } from "react";
import { Steps } from "antd";
import { withRouter } from "react-router-dom";

import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from "@ant-design/icons";


const { Step } = Steps;



class StepAll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="step-hr-container card">
          <Steps className="step-hr" size='small' responsive='true'  >
            <Step size='small' disabled description='niha' status="finish" title="Login" icon={<UserOutlined />}></Step>
            <Step size='small' disabled description='niha' status="finish" title="Verification" icon={<SolutionOutlined />}></Step>
            <Step size='small' status="process" title="pay" icon={<LoadingOutlined />}></Step>
            <Step size='small' status="wait" title="Done" icon={<SmileOutlined />}></Step>
          </Steps>
        </div>
        <div className="step-vt-container card">
          <Steps className="step-vt" size='small' responsive='true' direction='vertical' >
            <Step size='small' description='niha' status="finish" title="Login" icon={<UserOutlined />}></Step>
            <Step size='small' description='niha' status="finish" title="Verification" icon={<SolutionOutlined />}></Step>
            <Step size='small' status="process" title="pay" icon={<LoadingOutlined />}></Step>
            <Step size='small' status="wait" title="Done" icon={<SmileOutlined />}></Step>
          </Steps>
        </div>
        <div className="card step-hr-err-container ">
          <Steps className = 'step-hr-err' current={1} status="error" size = 'small'>
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" description="This is a description" />
          </Steps>
        </div>
      </>
    )
  }
}

export default withRouter(StepAll);