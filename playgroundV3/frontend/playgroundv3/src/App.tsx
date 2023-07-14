import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import ImageUpload from "./components/ImageUpload";
import ImageGetTry from "./components/ImageGetTry";

function App() {
  const [page, setPage] = useState("home");
  const [previousPage, setPreviousPage] = useState(page);
  const [formVisibility, setFormVisibility] = useState(false);

  const handlePageChange = (newPage: string) => {
    if (newPage !== "login" && newPage !== "register") {
      setPreviousPage(newPage);
    }

    if (newPage === "login" || newPage === "register") {
      setFormVisibility(true);
    } else {
      setFormVisibility(false);
    }
    setPage(newPage);
  };

  return (
    <div className="App">
      <NavBar onPageChange={handlePageChange} />

      <Router>
        <div
          className={`login-register-forms ${
            formVisibility ? "" : "invisible"
          }`}
        >
          {page === "register" && (
            <>
              <div
                className="cover"
                onClick={() => handlePageChange(previousPage)}
              />
              <div className="form">
                <RegisterForm onPageChange={handlePageChange} />
              </div>
            </>
          )}
          {page === "login" && (
            <>
              <div
                className="cover"
                onClick={() => handlePageChange(previousPage)}
              />
              <div className="form">
                <LoginForm onPageChange={handlePageChange} />
              </div>
            </>
          )}
        </div>
        <div className="content">
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <a>home</a>
                </>
              }
            />
            <Route
              path="/upload"
              element={
                <>
                  <ImageUpload />
                </>
              }
            />
            <Route
              path="/get"
              element={
                <>
                  <ImageGetTry />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
