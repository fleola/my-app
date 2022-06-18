import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { userData, loadingState, errorState } = useGithubUser({ username });
  return (
    <div>
      {userData && <h1>Your username is: {userData.login} </h1>}
      {errorState && <h1>Error</h1>}
      {loadingState && <h1>Loading...</h1>}
    </div>
  );
}
