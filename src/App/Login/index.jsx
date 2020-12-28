import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCustomForm } from "../../hooks/forms";
import { useVerifyLogin } from "../../hooks/authentication";
import LoginForm from "./LoginForm";
import { login } from "../../actions/user/login";

const Login = () => {
  const { pending, user, error } = useSelector((state) => state?.login);
  const dispatch = useDispatch();
  const [value, handleChange, handleSubmit] = useCustomForm(
    {},
    dispatch,
    login
  );

  const history = useHistory();
  const loginError = useVerifyLogin(
    user,
    pending,
    error,
    history,
    "login success"
  );

  return (
    <div className="login flex-jc-c flex-ai-c">
      <div className="login-form">
        <h3 className="login-form__header">Welcome to your Gifting Board</h3>
        {loginError}
        <LoginForm
          onChange={handleChange}
          onClick={handleSubmit}
          value={value}
          pending={pending}
        />
      </div>
    </div>
  );
};

export default Login;
