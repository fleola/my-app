import { useState } from "react";
import { GithubUser } from "./GithubUser";

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
      <div>
        <ul>
          {userArray.map((user) => {
            return (
              <li>
                <GithubUser username={user} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
