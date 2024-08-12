import { useState } from "react";

const Say = () => {
  const [state, setState] = useState('')
  const onClickEvent = () => { setState('안녕하세요')}
  const onClickLeave = () => { setState('안녕히가세요')}
  
  const [color, setColor] = useState('');
    return (
    <div>
      <h1 style={{color: color}}>{state}</h1>
      <button onClick={onClickEvent}>입장</button> 
      <button onClick={onClickLeave}>퇴장</button>
      <br />
      <button onClick={ () => { setColor('red')}}>Red</button>
      <button onClick={ () => { setColor('green')}}>Green</button>
      <button onClick={ () => { setColor('blue')}}>Blue</button>
    </div>)

}

export default Say;