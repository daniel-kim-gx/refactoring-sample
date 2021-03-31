import React from "react";
import { Router } from "@reach/router";
import Header from "./Header";

import Dashboard from "./pages/Dashboard";
import Counter from "./pages/Counter";
import Main from "./pages/Main";
import SnapshotTesting from "./pages/SnapshotTesting";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Main path="/" />
        <Counter path="/counter" />
        <Dashboard path="/dashboard" />
        <SnapshotTesting path="/snapshot-testing" />
      </Router>
    </>
  );
}

export default App;
