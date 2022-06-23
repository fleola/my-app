import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, refetch } = useGithubUser({ username });
  return (
    <div>
      {!data && !error && (
        <>
          <h1>Loading</h1>
          <button onClick={refetch}>Retry fetch</button>
        </>
      )}
      {!data && error && (
        <>
          <h1>Error</h1>
          <button onClick={refetch}>Retry fetch</button>
        </>
      )}
      {data && !error && (
        <>
          <h1>Your user is: {data.login}</h1>
          <button onClick={refetch}>Refresh user</button>
        </>
      )}
    </div>
  );
}
