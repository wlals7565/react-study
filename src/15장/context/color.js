import { useState, createContext } from "react";

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red'},
  action: {
    setColor: () => {},
    setSubcolor: () => {},
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black')
  const [subcolor, setSubcolor] = useState('red')

  const value = {
    state: {color, subcolor},
    action: {setColor, setSubcolor}
  }
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  )
};

const { Consumer: ColorConsumer} = ColorContext

//createContext({ color: 'black'})

export default ColorContext;
export { ColorProvider, ColorConsumer};
