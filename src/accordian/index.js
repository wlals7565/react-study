import { useState } from "react";
import data from "./data";
import './styles.css';

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, SetenableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null: getCurrentId)
  }
  const handleMultipleSelection = (getCurrnetId) => {
    if(multiple.includes(getCurrnetId)){
    multiple.filter((id) => { return id !== getCurrnetId})}
   else {
    setMultiple([...multiple, getCurrnetId])
  }
  }
  
  console.log(selected)
  return (
    <div className="wrapper">
      <button onClick={() =>{SetenableMultiSelection(!enableMultiSelection)}}>Enable multiple button selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div onClick={() => {enableMultiSelection? handleMultipleSelection(dataItem.id) :handleSingleSelection(dataItem.id)}} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection? (multiple.includes(dataItem.id) ? <div className="content">{dataItem.answer}</div>:null) : (selected === dataItem.id ? <div className="content">{dataItem.answer}</div>: null)
              }
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
