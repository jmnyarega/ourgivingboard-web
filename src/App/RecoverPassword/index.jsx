import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// hooks
import { useCustomForm } from "../../hooks/forms";
import {
  useForgotPasswordEmail,
  useVerifyLogin,
} from "../../hooks/authentication";

// components
import NewPasswordForm from "./NewPasswordForm";
import RecoverPasswordForm from "./RecoverPasswordForm";

// actions
import { forgotPassword } from "../../actions/user/forgotPassword";
import { newPassword } from "../../actions/user/newPassword";

const recoverPassword = () => {
  const history = useHistory();
  const { pending, user, error } = useSelector(
    (state) => state?.forgotPassword
  );
  const {
    pending: newPasswordPending,
    user: newPasswordUser,
    error: newPasswordError,
  } = useSelector((state) => state?.newPassword);
  const dispatch = useDispatch();
  const [
    forgotPasswordValue,
    handleForgotPasswordChange,
    handleForgotPasswordSubmit,
  ] = useCustomForm({}, dispatch, forgotPassword);

  const [
    newPasswordValue,
    handleNewPasswordChange,
    handleNewPasswordSubmit,
  ] = useCustomForm({}, dispatch, newPassword);

  const recoverError = useVerifyLogin(
    newPasswordUser,
    newPasswordPending,
    newPasswordError,
    history,
    "recover success"
  );

  const response = useForgotPasswordEmail(user, pending, error);
  return (
    <div className="login flex-jc-c flex-ai-c">
      <div className="login-form">
        <h3 className="login-form__header">Recover Password</h3>
        {console.log(recoverError, response)}
        {response ? (
          <NewPasswordForm
            onChange={handleNewPasswordChange}
            onClick={handleNewPasswordSubmit}
            value={newPasswordValue}
            pending={pending}
          />
        ) : (
          <RecoverPasswordForm
            onChange={handleForgotPasswordChange}
            onClick={handleForgotPasswordSubmit}
            value={forgotPasswordValue}
            pending={pending}
          />
        )}
      </div>
    </div>
  );
};

export default recoverPassword;
