import { Component } from "react";

class EventPratice0 extends Component {
  render() {
    return <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="message" placeholder="write anything" onChange={ (e) => console.log(e.target.value)}/>
    </div>;
  }
}

export default EventPratice0;