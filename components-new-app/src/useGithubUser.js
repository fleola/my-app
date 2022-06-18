import { useState, useEffect } from "react";

export function useGithubUser({ username }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  async function fetchUser(username) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 200) {
        const json = await response.json();
        setUser(json);
      }
    } catch (error) {
      setError(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  return {
    userData: user,
    fetchFunction: fetchUser,
    loadingState: loading,
    errorState: error,
  };
}
