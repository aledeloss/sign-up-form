import React, { useState } from 'react';
import { TextField } from '@mui/material';

export interface InputProps {
  autofocus?: boolean;
  error: any; // TODO: add more specific type
  label: string;
  name: string;
  shouldAutofocus?: boolean;
  type: 'text' | 'tel' | 'email' | 'password';
}

const GenericInput = ({
  error,
  label,
  name,
  shouldAutofocus = false,
  type
}: InputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    setValue(value);
  };

  console.log(value);

  return (
    <TextField
      autoFocus={shouldAutofocus}
      margin='dense'
      error={error}
      helperText={error?.message}
      label={label}
      name={name}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
      sx={{ width: '100%' }}
      type={type}
      value={value}
    />
  );
};

export default GenericInput;
