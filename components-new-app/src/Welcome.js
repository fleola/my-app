import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        {this.props.name ? (
          <p>
            Welcome, <strong>{this.props.name}</strong>!
          </p>
        ) : (
          <p>Welcome, User!</p>
        )}
        <Age age={this.props.age} />
      </div>
    );
  }
}
/* Welcome.defaultProps={
    name: "user",
    age: "non presente"
} */
