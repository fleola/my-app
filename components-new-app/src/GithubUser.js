import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState();
  async function fetchUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setUser(json);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  return (
    <div>
      {user && <h1>Your username is: {user.login} </h1>}
      {user && <h1>Your name is: {user.name} </h1>}
      {user && <h1>Your bio is: {user.bio} </h1>}
    </div>
  );
}
