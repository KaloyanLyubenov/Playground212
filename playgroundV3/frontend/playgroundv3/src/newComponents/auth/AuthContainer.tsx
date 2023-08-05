import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAuthContext } from "../AuthContext";
import "../../newStyles/auth/authContainer.css";

function AuthContainer() {
  const { state, handlePageChange } = useAuthContext();

  return (
    <>
      {state.page === "register" && (
        <>
          <div
            className="cover"
            onClick={() => handlePageChange(state.previousPage)}
          />
          <div className="form">
            <RegisterForm />
          </div>
        </>
      )}
      {state.page === "login" && (
        <>
          <div
            className="cover"
            onClick={() => handlePageChange(state.previousPage)}
          />
          <div className="form">
            <LoginForm />
          </div>
        </>
      )}
    </>
  );
}

export default AuthContainer;
