import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ImageUpload from "./components/ImageUpload";
import ImageUpload2 from "./components/ImageUpload2";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/image-add" element={<ImageUpload />} />
        </Routes>
      </Router> */}
      <ImageUpload2 />
    </div>
  );
}

export default App;
