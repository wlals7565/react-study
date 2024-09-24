import React from 'react'
import { useLocation, useSearchParams } from '../../../node_modules/react-router-dom/dist/index'

const About = () => {
  //const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail=== 'true' ? false: true})
  }

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({mode: nextMode, detail})
  }

  return (
    <div>
      <h1>intro</h1>
      <p>project shown by react router</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode +1</button>
    </div>
  )
}

export default About