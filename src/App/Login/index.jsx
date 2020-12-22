import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCustomForm } from "../../hooks/forms";
import LoginForm from "./LoginForm";
import { login } from "../../actions/user/login";

const verifyLogin = (user, pending, error, history) => {
  useEffect(() => {
    console.log(user)
    if (user?.message === "login success" && pending === false) {
      history.push("/home");
    } else if (error && pending === false) {
      return error.message;
    }
  }, [user, pending, error]);
};

const Login = () => {
  const { pending, user, error }= useSelector(state => state);
  const dispatch = useDispatch();
  const [ value ,handleChange, handleSubmit ] = useCustomForm({}, dispatch, login);

  const history = useHistory();
  verifyLogin(user, pending, error, history);

  return (
    <div className="login flex-jc-c flex-ai-c">
      <div className="login-form">
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
