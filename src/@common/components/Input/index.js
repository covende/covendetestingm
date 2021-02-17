import React from 'react';
import { Input as InputChakra } from '@chakra-ui/react';

function Input(props) {
  return (
    <InputChakra
      border="1px solid #C7C7C7"
      borderRadius="5px"
      _focus={{
        borderColor: '#C7C7C7',
        boxShadow: 'none',
      }}
      {...props}
    />
  );
}

export default Input;
