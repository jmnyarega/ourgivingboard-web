import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCustomForm } from "../../hooks/forms";
import LoginForm from "./LoginForm";
import { login } from "../../actions/user/login";

const verifyLogin = (user, pending, error) => {
  if (user?.message === "login success" && pending === "false") {
    return "redirect";
  }
  if(error && pending === "false") {
    return error.message;
  }
};

const Login = () => {
  const { pending, user, error }= useSelector(state => state);
  const dispatch = useDispatch();
  const [ value ,handleChange, handleSubmit ] = useCustomForm({}, dispatch, login);

  return (
    <div className="login flex-jc-c flex-ai-c">
      <div className="login-form">
        <p>{verifyLogin(user, pending, error)}</p>
        <h3 className="login-form__header">
          Welcome to your Gifting Board
        </h3>
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
