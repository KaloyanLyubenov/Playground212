import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import "../styles/loginForm.css";

interface LoginProps {
  onPageChange: (newPage: string) => void;
}

const LoginForm: React.FC<LoginProps> = ({ onPageChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      const token = response.data.jwtToken;
      localStorage.setItem("token", token);
      localStorage.setItem("userRoles", JSON.stringify(response.data.roles));
      localStorage.setItem("email", email);
      console.log(JSON.stringify(response.data.roles));

      console.log("Succesfull login");
      window.location.reload();
    } catch (error) {
      // Handle login error
    }

    setEmail("");
    setPassword("");
  };

  const handlePageChoice = (newPage: string) => {
    onPageChange(newPage);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <span className="log-in-text">Log in</span>
        <div className="login-inputs-container">
          <input
            type="text"
            className="login input email"
            placeholder="Email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            className="login input password"
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="buttons-container">
          <button className="login-button">Login</button>
        </div>
        <div className="register-option">
          <span>
            Don't have an account?{" "}
            <a
              onClick={() => {
                handlePageChoice("register");
              }}
            >
              Register
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
