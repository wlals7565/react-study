import React, {useRef} from 'react'

const FuncRef = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  }
  const printId = () => {
    console.log(id.current);
  }
  return (
    <div>
      refSample
    </div>
  );
};

export default FuncRef;