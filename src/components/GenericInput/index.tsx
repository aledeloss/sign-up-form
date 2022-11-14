import React from 'react';
import { Grid, TextField } from '@mui/material';
import { FormData } from '../Form';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface GenericInputProps {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  isDisabled: boolean;
  label: string;
  name: string;
  register: Function;
  setValues: React.Dispatch<React.SetStateAction<FormData>>;
  shouldAutofocus?: boolean;
  type: 'text' | 'tel' | 'email' | 'password';
  values: FormData;
}

const GenericInput = ({
  isDisabled,
  error,
  label,
  name,
  register,
  setValues,
  shouldAutofocus = false,
  type,
  values
}: GenericInputProps) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        disabled={isDisabled}
        autoFocus={shouldAutofocus}
        margin='dense'
        error={error}
        helperText={error?.message}
        label={label}
        {...register(name)}
        name={name}
        onChange={(event) => {
          setValues({ ...values, [name]: event.target.value });
        }}
        sx={{ width: '100%' }}
        type={type}
        value={values[name as keyof FormData]}
      />
    </Grid>
  );
};

export default GenericInput;
