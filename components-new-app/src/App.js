import React from "react";
import { ClickCounter } from "./ClickCounter";
import { FilteredList } from "./FilteredList";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={19} />
        <ClickCounter />
        <FilteredList
          list={[
            { name: "Sophie", age: 22, id: 1 },
            { name: "Christian", age: 7, id: 2 },
            { name: "Lorenzo", age: 17, id: 3 },
            { name: "Luis", age: 20, id: 4 },
            { name: "Lizzie", age: 25, id: 5 },
            { name: "Sandro", age: 19, id: 6 },
            { name: "Serenda", age: 12, id: 7 },
          ]}
        />
      </div>
    );
  }
}
