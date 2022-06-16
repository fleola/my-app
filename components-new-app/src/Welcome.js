import { Age } from "./Age";

export function Welcome(props) {
  return (
    <div className="welcome">
      {props.name ? (
        <p>
          Welcome, <strong>{props.name}</strong>!
        </p>
      ) : (
        <p>Welcome, User!</p>
      )}
      <Age age={props.age} />
    </div>
  );
}
