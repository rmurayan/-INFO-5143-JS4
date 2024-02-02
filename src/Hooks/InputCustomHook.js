import { useState } from "react";

export default function InputHook({ value }) {
  const [enteredValue, setEnteredValue] = useState(value);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);

  }
  return {
    value: enteredValue,
     setValue : setEnteredValue,
      handleInputChange
  };
}
