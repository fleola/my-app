import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { userData } = useGithubUser({ username });
  return (
    <div>
      {userData && <h1>Your username is: {userData.login} </h1>}
      {/* {user && <h1>Your name is: {user.name} </h1>}
      {user && <h1>Your bio is: {user.bio} </h1>} */}
    </div>
  );
}
