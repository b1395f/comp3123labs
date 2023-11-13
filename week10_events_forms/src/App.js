import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataEntryForm from './components/DataEntryForm.js'

function App() {
  return (
    <React.Fragment>
      <h1 align="center">Data Entry From</h1>
      <DataEntryForm/>
    </React.Fragment>
  );
}

export default App;
