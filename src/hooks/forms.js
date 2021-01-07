import { useState } from "react";

export const useCustomForm = (initial, callback, func, validate, data) => {
  const [inputs, setInputs] = useState(initial);
  const [rest] = useState(data);
  const handleInputChange = (event) => {
    if (event?.target) {
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    callback(func(inputs, rest));
  };
  return [inputs, handleInputChange, handleSubmit];
};
