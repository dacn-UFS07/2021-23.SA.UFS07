import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, isValid, type }) => {
  function onInput(InputEvent){
      console.log("input.onInput", InputEvent);
      if(typeof onData === "function"){
      onData(InputEvent.target.value);
      }
  }

  const message = isValid ? "Valore buono" : "Valore non buono"
  return (
    <>
      <input
      placeholder={placeholder}
      onInput={onInput}
      type={type}
    >
    </input>
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