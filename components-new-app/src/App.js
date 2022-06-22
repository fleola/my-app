import React from "react";
import { Welcome } from "./Welcome";
import { Link, Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/counter">COUNTER</Link>
          </li>
          <li>
            <Link to="/users">USERS</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Leo" />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route
          path="*"
          element={
            <>
              <h1> Page Not Found</h1>
              <Link to="/">Torna alla HOME</Link>
            </>
          }
        />
      </Routes>
    </>
  );
}
