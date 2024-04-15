import React from "react";

const InputField = ({ id, label, type, value, onChange, onBlur }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
    </>
  );
};

export default InputField;
