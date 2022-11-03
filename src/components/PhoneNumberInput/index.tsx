import React from 'react';
import InputMask from 'react-input-mask';
import { Grid, TextField } from '@mui/material';
import { GenericInputProps } from '../GenericInput';
import { FormData } from '../Form';

// TODO: Review YUP validation for this field, as it is broken since the mask was added.
// Refactor can be made, for including this field in the generic input.
const PhoneNumberInput = ({
  error,
  label,
  name,
  register, // not implemented yet
  setValues,
  type,
  values
}: GenericInputProps) => {
  const handleChange = (value: string) => {
    setValues(value);
  };
  return (
    <Grid item xs={12} sm={6}>
      <InputMask
        mask='(999) 999-9999'
        value={values[name as keyof FormData]}
        maskChar=' '
        {...register(name)}
        onChange={(event) => {
          handleChange({
            ...values,
            [name as keyof FormData]: event.target.value
          });
        }}
      >
        {() => (
          <TextField
            margin='dense'
            error={error}
            helperText={error?.message}
            label={label}
            name={name}
            sx={{ width: '100%' }}
            type={type}
          />
        )}
      </InputMask>
    </Grid>
  );
};

export default PhoneNumberInput;
