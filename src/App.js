import Accordian from "./accordian";
import TreeView from "./tree-view";
import menus from "./tree-view/data";

/*
const App = () => {
  return (
  <div className="App">
  {<Accordian/>}
  <TreeView menus={menus}/>
  </div>)
}
  */

import LifeCycleSample from "./7장/LifeCycleSample";
import "./App.css";
import { Component } from "react";
import ErrorBoundry from "./7장/ErrorBoundry";

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }
  
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundry>
        <LifeCycleSample color={this.state.color}/>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
