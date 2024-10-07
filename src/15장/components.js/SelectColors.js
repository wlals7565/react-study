import ColorContext, { ColorConsumer } from '../context/color';
import { Component } from 'react';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  static contextType = ColorContext

  handleSetColor = color => {
    this.context.actions.setColor(color)
  }

  handleSetSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor)
  }
  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={() =>this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetColor(color)
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
/*
const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
      {({action}) => (
        <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: color,
              width: '24px',
              height: '24px',
              cursor: 'pointer',
            }}
            onClick={() => action.setColor(color)}
            onContextMenu={e => {
              e.preventDefault();
              action.setSubcolor(color)
            }}
          />
        ))}
      </div>
      )}
      </ColorConsumer>
      <hr />
    </div>
  );
};
*/
export default SelectColors;
