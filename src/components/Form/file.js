// arquivo do input de arquivo retirado da documentação do unform 
import React, { ChangeEvent, useRef, useEffect, useCallback, useState }  from 'react';

import { useField } from '@unform/core';



const ImageInput= ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      }
    })
  }, [fieldName, registerField]);

  return (
    <>
      
      <input
        type="file"
        ref={inputRef}
        onChange={handlePreview}
        {...rest}
      />
      { preview && <img src={preview} alt="Preview" className="preview" width="100%" /> }
    </>
  );
};

export default ImageInput;