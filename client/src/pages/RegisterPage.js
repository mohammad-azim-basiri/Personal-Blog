import {useState} from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:7878/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('ثبت نام با موفقیت انجام شد.');
    } else {
      alert('ثبت نام انجام نشد. لطفا دباره امتحان کنید.');
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>ثبت نام</h1>
      <input type="text"
             placeholder="نام کاربری"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="پسورد"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>ثبت نام</button>
    </form>
  );
}