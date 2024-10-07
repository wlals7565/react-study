import React from 'react'
import ColorBox from './components.js/ColorBox'
import ColorContext, { ColorProvider } from './context/color'
import SelectColors from './components.js/SelectColors'

const App15 = () => {
  return (
    <ColorProvider>
    <div>
      <SelectColors />
      <ColorBox />
    </div>
    </ColorProvider>
  )
}

export default App15