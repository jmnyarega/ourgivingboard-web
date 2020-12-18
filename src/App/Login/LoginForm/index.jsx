import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ clicked }) => (
  <div className="login-form">
    <form> 
      <h3 className="login-form__header">
        Welcome to your Gifting Board
      </h3>
      <label> Email:
        <input type="email" className="form-control" />
      </label>
      <label> Password:
        <input type="password" className="form-control" />
      </label>
      <button
        onClick={clicked}
        className="login-form__btn btn btn-primary btn-block">
        Login
      </button>
    </form>
    <div className="login-form__signup">
      <button className="btn btn-outline-primary btn-block"> Sign Up </button>
    </div>
  </div>
);

LoginForm.propTypes = {
  clicked: PropTypes.func
};

export default LoginForm;
