import useSWR from "swr";
const fetcher = (user) => fetch(user).then((response) => response.json());

export function useGithubUser({ username }) {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return { data, error };
}
