import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import "../styles/registerForm.css";

interface RegisterProps {
  onPageChange: (newPage: string) => void;
}

const RegisterForm: React.FC<RegisterProps> = ({ onPageChange }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://10.16.6.11:8080/auth/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      const token = response.data.jwtToken;
      const userEmail = response.data.userEmail;
      localStorage.setItem("token", token);
      localStorage.setItem("userRoles", JSON.stringify(response.data.roles));
      localStorage.setItem("email", email);
      console.log(JSON.stringify(response.data.roles));

      console.log("Succesfull register");
    } catch (error) {
      // Handle login error
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    window.location.reload();
  };

  const handlePageChoice = (newPage: string) => {
    onPageChange(newPage);
  };

  return (
    <div className="register-form-container">
      <form
        className="register-form"
        onSubmit={(e: FormEvent) => handleRegister(e)}
      >
        <span className="sign-up-text">Sign up</span>
        <div className="register-inputs-container">
          <input
            type="text"
            className="register input first-name"
            placeholder="First name"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
          <input
            type="text"
            className="register input last-name"
            placeholder="Last name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
          <input
            type="text"
            className="register input email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            className="register input password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="buttons-container">
          <button className="register-button">Register</button>
        </div>
        <div className="log-in-option">
          <span>
            Already have an account?{" "}
            <a
              onClick={() => {
                handlePageChoice("login");
              }}
            >
              Log in
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
