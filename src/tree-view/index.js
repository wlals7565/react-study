import MenuList from "./menu-list";
import './styles.css';

const TreeView = ({menus = []}) => {

  return <div className="tree-view-conatiner">
    <MenuList list={menus}/>
  </div>
}

export default TreeView;