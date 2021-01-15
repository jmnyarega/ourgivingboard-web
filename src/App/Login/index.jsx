import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCustomForm } from "../../hooks/forms";
import { useVerifyLogin } from "../../hooks/authentication";
import LoginForm from "./LoginForm";
import { login } from "../../actions/user/login";
import GuestTopBar from "../Dashboard/TopBar/GuestTopBar";
import { getToken } from "../../helpers/localStorage";

const validate = ({ email, password }) => {
  let errors = {};
  if (password?.length < 6 || !password) {
    errors.password = "password too short";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !email) {
    errors.email = "invalid email";
  }
  return errors;
};

const Login = () => {
  const { pending, user, error } = useSelector((state) => state?.login);
  const dispatch = useDispatch();
  const [value, handleChange, handleSubmit, validationErrors] = useCustomForm(
    {},
    dispatch,
    login,
    validate
  );

  const history = useHistory();
  const loginError = useVerifyLogin(
    user,
    pending,
    error,
    history,
    "login success"
  );

  // go to dashboard if you are already signed in
  const token = getToken();
  if (token) {
    history.push("/home");
  }

  return (
    <>
    <GuestTopBar />
    <div className="login flex-jc-c flex-ai-c">
      <div className="login-form">
        <h3 className="login-form__header title">Welcome to your Gifting Board</h3>
        <LoginForm
          onChange={handleChange}
          onClick={handleSubmit}
          value={value}
          pending={pending}
          errors={{ validate: validationErrors, server: loginError }}
        />
      </div>
    </div>
    </>
  );
};

export default Login;
