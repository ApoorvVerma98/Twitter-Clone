import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import { NavLink } from "react-router-dom";
import Joi from "joi";
import styles from "./SignIn.module.css";
import { FaTwitter } from "react-icons/fa";

function TwitterLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = { username, password };
    const { error } = schema.validate(data);
    if (error) {
      setError(error.message);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      setError("User already exists");
      return;
    }
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    // history.push(`/home?username=${username}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Box className={styles.box}>
        <NavLink to="/" className={styles.cancelButton}>
          <CloseIcon />
        </NavLink>
        <FaTwitter className={styles.logo} />
        <h1 className={styles.title}>Sign in to Twitter</h1>
        <div className={styles.socialButtonsContainer}>
          <Button className={styles.googleButton} startIcon={<FcGoogle />}>
            Sign in with Google
          </Button>
          <Button className={styles.appleButton} startIcon={<AppleIcon />}>
            Sign in with Apple
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <Box className={styles.inputContainer}>
            <TextField
              id="username"
              label="Phone, Email or Username"
              variant="filled"
              value={username}
              onChange={handleUsernameChange}
              className={styles.inputField}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="filled"
              value={password}
              onChange={handlePasswordChange}
              className={styles.inputField}
            />
          </Box>
          {error && <p className={styles.error}>{error}</p>}
          <br />
          <Button
            type="submit"
            variant="contained"
            className={styles.SubmitButton}
          >
            Submit
          </Button>
          <br />
          <Button
            type="button"
            variant="text"
            className={styles.forgotPasswordButton}
          >
            Forgot Password?
          </Button>
        </form>
        <div className={styles.signupContainer}>
          <p>
            Don't have an account? <a href="./SignUp">Sign up</a>
          </p>
        </div>
      </Box>
    </div>
  );
}

export default TwitterLogin;
