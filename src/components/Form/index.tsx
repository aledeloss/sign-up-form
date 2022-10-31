import { Grid } from '@mui/material';
import React from 'react';
import GenericInput from '../GenericInput';

const Form = () => {
  return (
    <form>
      <Grid container columnSpacing={{ xs: 1 }} sx={{ margin: '2em' }}>
        <GenericInput label='First name' name='firstName' type='text' />
        <GenericInput label='First name' name='firstName' type='text' />
        <GenericInput label='Phone number' name='phoneNumber' type='tel' />
        <GenericInput label='Email' name='email' type='email' />
        <GenericInput label='Password' name='password' type='password' />
        <GenericInput
          label='Confirm password'
          name='confirmPassword'
          type='password'
        />
      </Grid>
    </form>
  );
};

export default Form;
