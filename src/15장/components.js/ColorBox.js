import { useContext } from 'react';
import ColorContext from '../context/color';
import { ColorConsumer } from '../context/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

/*
const ColorBox = () => {
  return (
    <ColorConsumer>
    {value => (
      <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: value.state.color
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: value.state.subcolor
        }}
      />
      </>
    )}
    </ColorConsumer>
  )
}
*/

export default ColorBox;
