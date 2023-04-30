import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import { NavLink } from "react-router-dom";
import Joi from "joi";
import styles from "./SignIn.module.css";
import { FaTwitter } from "react-icons/fa";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
 
function TwitterLogin() {
  const Navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

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
    const userdata = JSON.parse(localStorage.getItem("userdata")) || [];
    console.log(userdata);
    const existingUser = userdata.find((user) => user.email === username);

    if (existingUser == undefined) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User not found!",
      });
      return;
    }

    localStorage.setItem("logedUser", JSON.stringify(data));

    swal.fire({
      icon: "success",
      title: "😎😎😎😎 ",
      text: "Logged In!",
      // footer: '<a href="">Why do I have this issue?</a>'
    });
    setTimeout(() => {
      Navigate("/");
    }, 2000);
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

export default TwitterLogin;