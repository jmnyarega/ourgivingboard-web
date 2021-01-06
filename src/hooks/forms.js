import { useState } from "react";

export const useCustomForm = (initial, callback, func, validate, data) => {
  const [inputs, setInputs] = useState(initial);
  const [rest] = useState(data);
  const [validateErrors, setValidationErrors] = useState();
  const handleInputChange = (event) => {
    if (event?.target) {
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
      if (validate) {
        setValidationErrors(validate(inputs));
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      setValidationErrors(validate(inputs));
      validateErrors &&
        Object.keys(validateErrors).length === 0 &&
        callback(func(inputs, rest));
    } else {
      callback(func(inputs));
    }
  };
  return [inputs, handleInputChange, handleSubmit, validateErrors];
};
