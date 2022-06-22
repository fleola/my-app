import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  const [username, setUsername] = useState();
  const [userArray, setUserArray] = useState([]);
  const handleInputChange = (event) => {
    // setta il valore di username
    setUsername(event.target.value);
  };
  const handleButtonClick = (event) => {
    //setta lo state dell array col valore di username
    setUserArray((userArray) => [...userArray, username]);
  };
  return (
    <>
      <input
        name="username"
        value={username}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleButtonClick}>Fetch user</button>
      <hr />
      <div>
        <ul>
          {userArray.map((user) => (
            <li key={user}>
              <Link to={`/users/${user}`}>Vai all'utente {user}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
