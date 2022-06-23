import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error } = useGithubUser({ username });
  return (
    <div>
      {!data && !error && <h1>Loading</h1>}
      {!data && error && <h1>Error!</h1>}
      {data && !error && <h1>Your user is: {data.login}</h1>}
    </div>
  );
}
