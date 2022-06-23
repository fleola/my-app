import useSWR from "swr";
const fetcher = (user) => fetch(user).then((response) => response.json());

export function useGithubUser({ username }) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return { data, error };
}
