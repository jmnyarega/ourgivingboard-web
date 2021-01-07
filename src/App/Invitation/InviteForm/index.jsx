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
      <div className="invite-form__with-errors">{errors.validate?.fname}</div>
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
      <div className="invite-form__with-errors">{errors.validate?.lname}</div>
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
      <div className="invite-form__with-errors">
        {errors.validate?.password}
      </div>
    )}
    <label> Confirm Password:
      <input
        onChange={onChange}
        value={value.password_confirmation || ""}
        placeholder="******"
        type="password"
        name="password_confirmation"
        className="form-control"
      />
    </label>
    {errors.validate?.confirmPassword && (
      <div className="invite-form__with-errors">
        {errors.validate?.password_confirmation}
      </div>
    )}
    <div className="flex flex-jc-fe">
      <button
        onClick={onClick}
        disabled={pending}
        className="btn btn-primary btn"
      >
        {pending ? "Sending..." : "Sign Up"}
      </button>
    </div>
    {errors?.server && !pending && (
      <div className="alert alert-danger">{errors.server}</div>
    )}
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
