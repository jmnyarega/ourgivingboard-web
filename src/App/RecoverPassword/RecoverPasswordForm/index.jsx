import React from "react";
import PropTypes from "prop-types";

const RecoverPasswordForm = ({ onChange, onClick, value, pending }) => (
  <form>
    <label> Email:
      <input
        onChange={onChange}
        value={value.email || ""}
        type="email"
        name="email"
        className="form-control"
      />
    </label>
    <button
      onClick={onClick}
      disabled={pending}
      className="login-form__btn btn btn-primary btn-block"
    >
      {pending ? "Sending..." : "recover"}
    </button>
  </form>
);

RecoverPasswordForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.object,
  pending: PropTypes.bool,
};

export default RecoverPasswordForm;
