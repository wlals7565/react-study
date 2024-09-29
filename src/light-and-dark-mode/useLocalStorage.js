import React, {useState, useEffect} from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(()=> {
    let currentValue;

    try{
      currentValue = localStorage.getItem(key) || String(defaultValue)
    } catch (error) {
      console.log(error);
      currentValue = defaultValue
    }

    return currentValue;
  })

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value])

  return [value, setValue];
}

export default useLocalStorage