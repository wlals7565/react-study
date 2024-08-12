import { Component } from "react";

class EventPratice2 extends Component {
  state = {
    message: ''
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message:''
    });
  }

  render() {
    return <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="message" placeholder="write anything" value={this.state.message} onChange={this.handleChange}/>
      <button onClick={this.handleClick}>확인</button>
    </div>;
  }
}

export default EventPratice2;