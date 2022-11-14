import React, { useState } from 'react';
import './App.css';
import { Container } from '@mui/material';
import Message from './components/Message.tsx';
import Form from './components/Form';
import { FieldValues } from 'react-hook-form';

const App = () => {
  const [isMessageShown, setIsMessageShown] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const pageTitle = 'Sign up';

  const sendData = (data: FieldValues): void => {
    console.log(data);
    const randomNumberForMocking = Date.now();
    setIsSuccess(randomNumberForMocking % 3 !== 0);
    setIsMessageShown(true);
  };

  return (
    <Container maxWidth='md' className='App'>
      {isSuccess}
      {isMessageShown}
      <h1>{pageTitle}</h1>
      {isMessageShown && (
        <Message setIsMessageShown={setIsMessageShown} isSuccess={isSuccess} />
      )}
      <Form sendData={sendData} hasSucceded={isSuccess} />
    </Container>
  );
};

export default App;
