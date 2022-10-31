import React from 'react';
import { Grid, TextField } from '@mui/material';
import { FormData } from '../Form';

export interface InputProps {
  error: any; // TODO: add more specific type
  label: string;
  name: string;
  register: Function;
  setValues: any; // (value: string) => void;
  shouldAutofocus?: boolean;
  type: 'text' | 'tel' | 'email' | 'password';
  values: FormData;
}

const GenericInput = ({
  error,
  label,
  name,
  register,
  setValues,
  shouldAutofocus = false,
  type,
  values
}: InputProps) => {
  const handleChange = (value: string) => {
    setValues(value);
  };

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        autoFocus={shouldAutofocus}
        margin='dense'
        error={error}
        helperText={error?.message}
        label={label}
        {...register(name)}
        name={name}
        onChange={(event) => {
          handleChange({ ...values, [name]: event.target.value });
        }}
        sx={{ width: '100%' }}
        type={type}
        value={values[name]}
      />
    </Grid>
  );
};

export default GenericInput;
