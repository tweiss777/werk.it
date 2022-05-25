import './TextInput.css';

import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { nanoid } from 'nanoid';

const TextInput = (props) => {
  // Props
  const {
    children,
    placeHolder,
    className = '',
    type = 'text',
    label,
    name = nanoid(7),
    required,
    noBorder,
    onChange,
    value,
    onSubmit,
    rows,
    ...rest
  } = props;

  // Hooks
  const methods = useFormContext();
  const errors = methods?.formState?.errors;
  const register = methods?.register;
  const setValue = methods?.setValue;

  const handleKeyPress = (event) => {
    if (onSubmit && event.which === 13) {
      onSubmit(event);
    }
  };

  useEffect(() => {
    setValue(name, value)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  

  return (
    <>
      <div
        className={`TextInput ${className ? className : ''} ${
          required ? 'required' : ''
        } ${methods && errors[name] ? 'error' : ''}
                `}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <div className={`group container ${noBorder ? 'noBorder' : ''} ${rows ? 'area' : ''}`}>
          {rows ? (
            <textarea
              rows={rows}
              cols="1"
              placeholder={placeHolder}
              name={name}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              {...(methods && register(name))}
              {...rest}
            />
          ) : (
            <input
              type={type}
              placeholder={placeHolder}
              name={name}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              {...(methods && register(name))}
              {...rest}
            />
          )}
          {children && <div>{children}</div>}
        </div>
        <div
          className={`ml-auto whitespace-nowrap relative bottom-5 h-0 -mb-2 right-1 transition-all duration-300 ${
            methods && errors[name] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-xs text-red-500 bg-white bg-opacity-90 px-2 py-0.5 rounded-full ">
            {(methods && errors[name]?.message) || 'Required'}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextInput;
