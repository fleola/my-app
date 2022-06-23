import useSWR from "swr";
const fetcher = (user) => fetch(user).then((response) => response.json());

export function useGithubUser({ username }) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const refetch = () => mutate();

  return { data, error, refetch };
}
