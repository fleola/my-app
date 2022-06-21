import React from "react";
import { Welcome } from "./Welcome";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Leo" />} />
    </Routes>
  );
}
