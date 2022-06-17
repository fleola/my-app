import { useState } from "react";

export function Login({ login }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInput = (event) => {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleLogin = () => {
    login(data);
  };

  return (
    <div>
      <label>Username</label>
      <input
        name="username"
        value={data.username}
        onChange={handleInput}
      ></input>
      <label>Password</label>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInput}
      ></input>
      <label>Remember ?</label>
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleInput}
      ></input>

      <button
        disabled={data.username && data.password ? false : true}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
