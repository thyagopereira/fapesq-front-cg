import React from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Principal from './Principal'

function App() {
  return (
    <BrowserRouter>
      <Principal />
    </BrowserRouter>
  );
}

export default App;
