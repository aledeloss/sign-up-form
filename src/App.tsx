import React from 'react';
import './App.css';
import GenericInput from './components/GenericInput';

const App = () => {
  return (
    <div className='App'>
      <GenericInput
        error={{ message: 'Ups' }}
        label={'First name'}
        name={'firstName'}
        shouldAutofocus={true}
        type={'text'}
      />
    </div>
  );
};

export default App;
