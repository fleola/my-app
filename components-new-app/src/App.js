import React from "react";
import { Welcome } from "./Welcome";
import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Leo" />} />
      <Route path="/counter" element={<ClickCounter />} />
    </Routes>
  );
}
