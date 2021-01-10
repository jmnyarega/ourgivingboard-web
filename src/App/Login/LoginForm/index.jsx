import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ onChange, onClick, value, pending, errors }) => (
  <>
    <form>
      <label>
        Email:
        <input
          onChange={onChange}
          value={value.email || ""}
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address..."
        />
      </label>
      {errors.validate?.email && (
        <div className="login-form__with-errors">{errors.validate?.email}</div>
      )}
      <label>
        Password:
        <input
          onChange={onChange}
          value={value.password || ""}
          type="password"
          name="password"
          className="form-control"
          placeholder="******"
        />
      </label>
      {errors.validate?.password && (
        <div className="login-form__with-errors">
          {errors.validate?.password}
        </div>
      )}
      <div className="flex flex-jc-fe">
        <button
          onClick={onClick}
          disabled={pending}
          className="login-form__btn btn btn-primary"
        >
          {pending ? "Sending..." : "Login"}
        </button>
      </div>
    </form>
    {errors?.server && !pending && (
      <div className="alert alert-danger">
        {errors.server}
      </div>
    )}
    <div className="login-form__signup flex flex-jc-c flex-ai-c">
      Need an account? <button className="btn btn-link"> Sign up here </button>
    </div>
  </>
);

LoginForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.object,
  errors: PropTypes.object,
  pending: PropTypes.bool,
};

export default LoginForm;
