import './App.css';
import {Router} from "@reach/router";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllAuthors from "./components/AllAuthors"
import NewAuthor from "./components/NewAuthor"

function App() {

  return (
      <div className="App">
        <Router>
          <AllAuthors path="/"/>
          <NewAuthor path="/new"/>
        </Router>
      </div>
  );
}

export default App;
