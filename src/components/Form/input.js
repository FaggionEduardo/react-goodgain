// arquvo de input tipo texto retirado da documentação do unform 
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
      <div>
  <input ref={inputRef} defaultValue={defaultValue} {...rest} /><br/>
  {error && <span className={"Error"}>{error}</span> }
  </div>

  );
}