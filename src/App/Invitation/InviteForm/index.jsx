import React from "react";
import PropTypes from "prop-types";

const InviteForm = ({ onChange, onClick, value, pending, errors }) => (
  <form>
    <label> First Name:
      <input
        onChange={onChange}
        value={value.fname || ""}
        type="text"
        placeholder="First Name"
        name="fname"
        className="form-control"
      />
    </label>
    {errors.validate?.fname && (
      <div className="login-form__with-errors">{errors.validate?.fname}</div>
    )}
    <label> Last Name:
      <input
        onChange={onChange}
        value={value.lname || ""}
        type="text"
        placeholder="Last Name"
        name="lname"
        className="form-control"
      />
    </label>
    {errors.validate?.lname && (
      <div className="login-form__with-errors">{errors.validate?.lname}</div>
    )}
    <label> Password:
      <input
        onChange={onChange}
        value={value.password || ""}
        placeholder="******"
        type="password"
        name="password"
        className="form-control"
      />
    </label>
    {errors.validate?.password && (
      <div className="login-form__with-errors">{errors.validate?.password}</div>
    )}
    <label> Confirm Password:
      <input
        onChange={onChange}
        value={value.confirmPassword || ""}
        placeholder="******"
        type="password"
        name="confirmPassword"
        className="form-control"
      />
    </label>
    {errors.validate?.confirmPassword && (
      <div className="login-form__with-errors">
        {errors.validate?.confirmPassword}
      </div>
    )}
    <button
      onClick={onClick}
      disabled={pending}
      className="login-form__btn btn btn-primary btn-block"
    >
      {pending ? "Sending..." : "Login"}
    </button>
    { errors?.server && <div className="alert alert-danger">{errors.server}</div> }
  </form>
);

InviteForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.object,
  errors: PropTypes.object,
  pending: PropTypes.bool,
};

export default InviteForm;
