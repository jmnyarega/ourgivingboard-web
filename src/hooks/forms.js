import { useState } from "react";

export const useCustomForm = (initial, callback, func) => {
  const [inputs, setInputs] = useState(initial);
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    callback(func(inputs));
  };
  return [ inputs, handleInputChange, handleSubmit ];
};
