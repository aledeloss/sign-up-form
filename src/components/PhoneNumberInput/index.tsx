import React, { ReactNode } from 'react';
import InputMask from 'react-input-mask';
import { Grid, TextField } from '@mui/material';
import { GenericInputProps } from '../GenericInput';
import { FormData } from '../Form';

// Refactor can be made, for including this field in the generic input.
const PhoneNumberInput = ({
  error,
  isDisabled,
  label,
  name,
  register,
  setValues,
  type,
  values
}: GenericInputProps) => {
  return (
    <Grid item xs={12} sm={6}>
      <InputMask
        mask='(999) 999-9999'
        value={values[name as keyof FormData]}
        maskChar=' '
        disabled={isDisabled}
        {...register(name)}
        onChange={(event) => {
          setValues({ ...values, [name]: event.target.value });
        }}
      >
        {() => (
          <TextField
            disabled={isDisabled}
            margin='dense'
            error={Boolean(error)}
            helperText={error?.message as ReactNode}
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
