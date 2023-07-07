import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import "../styles/registerForm.css";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    try {
      const response = await axios.post(
        " http://localhost:8080/auth/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      const token = response.data.jwtToken;
      localStorage.setItem("token", token);
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div className="form-box">
      <form className="form" onSubmit={(e: FormEvent) => handleRegister(e)}>
        <span className="title">Sign up</span>
        <div className="form-container">
          <input
            type="text"
            className="input"
            placeholder="First Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
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
        <button>Sign up</button>
      </form>
      <div className="form-section">
        <p>
          Have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
