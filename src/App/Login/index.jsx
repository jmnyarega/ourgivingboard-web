import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "../../actions/user/login";

const Login = () => {
  const { pending }= useSelector(state => state);
  const dispatch = useDispatch();

  const handleLogin = (evt) => {
    evt.preventDefault();
    dispatch(login(10));
  };

  return (
    <div className="login flex-jc-c flex-ai-c">
      {console.log(pending)}
      <LoginForm clicked={handleLogin} />
    </div>
  );
};

export default Login;
