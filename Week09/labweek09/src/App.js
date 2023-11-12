import React from "react";
import logo from './logo.svg';
import './App.css';
import Name from "./components/Name";
import Student from "./components/student/Student";


function App() {
  return (

    <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 align="center">Welcome to Full Stack Development - I</h1>
        <h2 align="center">ReactJS Programming Week 09 Lab Exercise</h2>
        <Name fnm="Berniel" lnm="Francisco"/>
        <Student college="George Brown College, Toronto"/>
    </React.Fragment>
  );
}

export default App;
