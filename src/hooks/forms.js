import { useState } from "react";

export const useCustomForm = (initial, callback, func, validate) => {
  const [inputs, setInputs] = useState(initial);
  const [validateErrors, setValidationErrors] = useState();
  const handleInputChange = (event) => {
    if (event?.persist) {
      event.persist();
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
      if (validate) {
        setValidationErrors(validate(inputs));
      }
    }

    console.log(event)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      setValidationErrors(validate(inputs));
      validateErrors &&
        Object.keys(validateErrors).length === 0 &&
        callback(func(inputs));
    } else {
      callback(func(inputs));
    }
  };
  return [inputs, handleInputChange, handleSubmit, validateErrors];
};
