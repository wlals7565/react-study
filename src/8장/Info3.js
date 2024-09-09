import React, {useEffect, useReducer, useState} from "react"

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info3 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  })

  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target)
  }

  return (<div>
    <div>
      <input value={name} name="name" onChange={onChange} />
      <input value={nickname} name="nickname" onChange={onChange} />
    </div>
    <div>
      <div>
        <b>name:</b> {name}
      </div>
      <div>
        <b>nickname: </b> {nickname}
      </div>
    </div>
  </div>)
}

export default Info3;