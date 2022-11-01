import React from 'react';
import { Grid, TextField } from '@mui/material';
import { FormData } from '../Form';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface GenericInputProps {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  label: string;
  name: string;
  register: Function;
  setValues: React.Dispatch<React.SetStateAction<FormData>>;
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
}: GenericInputProps) => {
  const handleChange = (value: FormData) => {
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
        value={(values[name])}
      />
    </Grid>
  );
};

export default GenericInput;
