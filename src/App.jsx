import React from "react";
import "./App.css";

import RouterPath from "./path/RouterPath";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <RouterPath />
      <Footer />
    </>
  );
}

export default App;
