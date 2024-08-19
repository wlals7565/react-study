import { useState } from "react";

const EventPractice6 = () => {
  const [form, setForm] = useState({username: '', message: ''})
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name] : e.target.value
    }
    setForm(nextForm)
  }
  const onClick = () => {
    alert(form.username + ": " + form.message);
    setForm({message: '', username: ''})
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={form.username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지"
        value={form.message}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice6;
