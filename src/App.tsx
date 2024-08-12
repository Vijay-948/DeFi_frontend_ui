// import React from 'react';
// import logo from './logo.svg';
// import { Login } from "@mui/icons-material";
import "./App.css";
import LoginPage from "./Authentication/login";
import Register from "./Authentication/signUp-page";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <LoginPage/>
    </div>
  );
}

export default App;
