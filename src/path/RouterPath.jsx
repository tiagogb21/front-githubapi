import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../components/User";
import Main from "../pages/Main";

function RouterPath() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Main />
            </>
          }
        />
        <Route
          exact
          path="/user"
          element={
            <>
              <User />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default RouterPath;
