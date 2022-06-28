import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, isValid, type, id, label }) => {
  function onInput(InputEvent){
      console.log("input.onInput", InputEvent);
      if(typeof onData === "function"){
      onData(InputEvent.target.value);
      }
  }

  const message = isValid ? "Valore corretto" : "Valore Errato"
  return (
    <>
    <input 
      id={id}
      placeholder={placeholder}
      onInput={onInput}
      type={type}
    >
    </input>
    {label===undefined? null : <label htmlFor={id}>{label}</label>}
    {isValid === undefined ? null : message}
    </>

  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  onData: undefined,
  type: 'text',
  isValid: undefined
};
