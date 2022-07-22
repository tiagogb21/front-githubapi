import React from "react";
import "./App.css";

import RouterPath from "./path/RouterPath";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MyProvider from "./context/Provider";

function App() {
  return (
    <MyProvider>
      <Header />
      <RouterPath />
      <Footer />
    </MyProvider>
  );
}

export default App;
