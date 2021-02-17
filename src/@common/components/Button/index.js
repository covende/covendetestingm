import { Button as ButtonChakra } from '@chakra-ui/react';
import React from 'react';

function Button({ children, ...rest }) {
  return <ButtonChakra {...rest}>{children}</ButtonChakra>;
}

export default Button;
