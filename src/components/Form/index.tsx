import React, { BaseSyntheticEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import { validationSchema } from './validationSchema';
import GenericInput from '../GenericInput';
import PhoneNumberInput from '../PhoneNumberInput';

export type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const Form = ({
  sendData
}: {
  sendData: (
    data: FieldValues,
    event?: BaseSyntheticEvent<object, any, any> | undefined
  ) => void;
}) => {
  const defaultInputValues: FormData = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  const [values, setValues] = useState<FormData>(defaultInputValues);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <Grid container columnSpacing={{ xs: 1 }} sx={{ margin: '2em' }}>
        <GenericInput
          error={errors.firstName}
          label='First name'
          name='firstName'
          register={register}
          setValues={setValues}
          shouldAutofocus={true}
          type='text'
          values={values}
        />
        <GenericInput
          error={errors.lastName}
          label='Last name'
          name='lastName'
          register={register}
          setValues={setValues}
          type='text'
          values={values}
        />
        <PhoneNumberInput
          error={errors.phoneNumber}
          label='Phone number'
          name='phoneNumber'
          register={register}
          setValues={setValues}
          type='tel'
          values={values}
        />
        <GenericInput
          error={errors.email}
          label='Email'
          name='email'
          register={register}
          setValues={setValues}
          type='email'
          values={values}
        />
        <GenericInput
          error={errors.password}
          label='Password'
          name='password'
          register={register}
          setValues={setValues}
          type='password'
          values={values}
        />
        <GenericInput
          error={errors.confirmPassword}
          label='Confirm password'
          name='confirmPassword'
          register={register}
          setValues={setValues}
          type='password'
          values={values}
        />
      </Grid>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        sx={{ margin: '2px', width: '100%' }}
      >
        Accept
      </Button>
    </form>
  );
};

export default Form;
