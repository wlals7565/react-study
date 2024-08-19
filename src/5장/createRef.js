import React, { Component } from "react"


class RefSampel extends Component {
  input = React.createRef();

  handleFocuse = () => {
    this.input.current.focus()
  }

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    )
  }
}