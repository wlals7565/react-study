import App14 from "./14장/App14";
import LightDarkMode from "./light-and-dark-mode/index";
import LoadMoreData from "./load-more-button/index";
import QRCodeGnenrator from "./qr-code-generator/index";
/*
import ImageSlider from "./image-slider/index";
import Accordian from "./accordian";
import RandomColor from "./random-color/index";
import StarRate from "./star-rate/index";
import TreeView from "./tree-view";
import menus from "./tree-view/data";
*/


const App = () => {
  return (
  <div className="App">
  {<App14 />}
  {/*25 프로젝트 용*/}
  {/*<Accordian/>*/}
  {/*<TreeView menus={menus}/>*/}
  {/*<RandomColor />*/}
  {/*<StarRate numberOfStarts={10}/>*/}
  {/*<ImageSlider url={`https://picsum.photos/v2/list`} limit={"10"} page={"1"}/>*/}
  {/*<LoadMoreData/>*/}
  {/*<QRCodeGnenrator/>*/}
  {/*<LightDarkMode/>*/}
  </div>)
}


export default App;
