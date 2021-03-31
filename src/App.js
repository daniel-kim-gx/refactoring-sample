import React from "react";
import { Router } from "@reach/router";
import Header from "./Header";

import Dashboard from "./pages/Dashboard";
import Counter from "./pages/Counter";
import Main from "./pages/Main";
import SnapshotTesting from "./pages/SnapshotTesting";
import ComponentStructure from "./pages/ComponentStructure";
import Redux from "./pages/Redux";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Main path="/" />
        <Counter path="/counter" />
        <Dashboard path="/dashboard" />
        <SnapshotTesting path="/snapshot-testing" />
        <ComponentStructure path="/component-structure" />
        <Redux path="/redux" />
      </Router>
    </>
  );
}

export default App;
