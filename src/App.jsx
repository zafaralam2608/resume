import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function App() {

  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Footer/>
    </div>
  );
}
