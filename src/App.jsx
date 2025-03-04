import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {

  return (
    <div>
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}
