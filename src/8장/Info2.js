import react, {useEffect, useState} from "react"

const Info2 = () => {
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('');
  useEffect(()=> {
    console.log('rendering is completed');
    console.log({
      name, nickname
    });
  });

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value)
  }

  return (<div>
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickname} />
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

export default Info2;