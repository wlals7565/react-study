import React, {Component} from 'react'

class ErrorBoundry extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true
    })
    console.log({error, info})
  }
  render() {
    return <div>
      {this.state.error ? <div>에러가 발생하였습니다.</div> : this.props.children}
      
    </div>
  }
}

export default ErrorBoundry;