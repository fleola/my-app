import { useState, useEffect } from "react";

export function useGithubUser({ username }) {
  const [user, setUser] = useState();
  async function fetchUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 200) {
        const json = await response.json();
        setUser(json);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  return { userData: user };
}
