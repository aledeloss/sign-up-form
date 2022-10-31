import React from 'react';
import Alert from '@mui/material/Alert';
type MessageProps = {
  isSuccess: boolean;
  setIsMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
};
const Message = ({ isSuccess, setIsMessageShown }: MessageProps) => {
  const successMessage = 'You have successfully signed in!';
  const errorMessage = 'We are sorry, there was an error.';
  return (
    <Alert
      onClose={() => {
        setIsMessageShown(false);
      }}
      severity={isSuccess ? 'info' : 'error'}
    >
      {isSuccess ? successMessage : errorMessage}
    </Alert>
  );
};

export default Message;
