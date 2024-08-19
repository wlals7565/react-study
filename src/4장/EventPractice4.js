import { Component } from "react";

class EventPractice3 extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message+ ': ' + this.state.username);
    this.setState({
      message: "",
      username: '',
    });
  };

  handleEnterPress = (e) => {
    if (e.key === "Enter") {
      alert(this.state.message+ ': ' + this.state.username);
      this.setState({
        message: "",
        username: '',
      });
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="write anything"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="write your name"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyDown={this.handleEnterPress}
        />
        <button onClick={this.handleClick}>
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice3;
