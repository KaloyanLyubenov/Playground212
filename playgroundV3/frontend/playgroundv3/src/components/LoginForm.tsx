import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import "../styles/registerForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(" http://localhost:8080/auth/login", {
        email,
        password,
      });
      const token = response.data.jwtToken;
      localStorage.setItem("token", token);
      console.log(token);
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div className="form-box">
      <form className="form" onSubmit={(e: FormEvent) => handleLogin(e)}>
        <span className="title">Sign in</span>
        <div className="form-container">
          <input
            type="email"
            className="input"
            placeholder="Email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <button>Sign in</button>
      </form>
      <div className="form-section">
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
