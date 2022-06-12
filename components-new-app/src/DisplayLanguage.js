import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
  state = {
    language: "english",
  };
  handleChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <h1>The language selected is: {language}</h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
