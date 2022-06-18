import { useLogin } from "./useLogin";

export function Login() {
  const { username, password, handleInput } = useLogin();

  return (
    <div>
      <label>Username</label>
      <input name="username" value={username} onChange={handleInput}></input>
      <label>Password</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={handleInput}
      ></input>
    </div>
  );
}
