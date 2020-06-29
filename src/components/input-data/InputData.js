import React from 'react';

export default function InputData({
  id,
  className,
  type,
  value,
  hint,
  label,
  min,
  max,
  step,
  prefix = '',
  suffix = '',
  isFocused = false,
  errorMessage = '',
  sucessMessage = '',
  handleInput = () => {},
  validation = () => {},
}) {
  const handleOnChange = (ev) => {
    const value = ev.target.value;
    handleInput(value);
  };

  return (
    <div className={`input-field ${className}`}>
      <span className="prefix">{prefix}</span>
      <input
        id={id}
        type={type}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleOnChange}
        placeholder={hint}
        autoFocus={isFocused}
      />
      <span className="suffix">{suffix}</span>
      <label
        htmlFor={id}
        className={isFocused ? 'active' : undefined}
        data-error={errorMessage}
      >
        {label}
      </label>
      <span data-error={errorMessage} data-success={sucessMessage}></span>
    </div>
  );
}
