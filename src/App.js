import SignUp from "./components/SignUp";
import SignUpAcknowledgement from "./components/SignUpAcknowledgement";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SignUp />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/submissionSuccessful"
            element={<SignUpAcknowledgement />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
