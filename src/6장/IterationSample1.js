import { useState } from "react";

const IterationSample1 = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람'},
    { id: 2, text: '얼음'},
    { id: 3, text: '눈'},
    { id: 4, text: '바람'},
  ])
  const [inputText, setInputText] = useState('')
  const [nextid, setNextId] = useState(4);

  const onChange = e => setInputText(e.target.value);
  const addName = () => {
    setNextId(nextid +1)
    setNames([...names, {id: nextid, text: inputText}])
    setInputText('')
  }
  const deleteName = () => {
    setNames( names.filter(name => name.id !== nextid));
    setNextId(nextid -1)
  }

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
  
  
  return (
  <>
  <input value={inputText} onChange={onChange}/>
  <button onClick={addName}>추가</button>
  <button onClick={deleteName}>삭제</button>
  <ul>{nameList}</ul></>)
};



export default IterationSample1;