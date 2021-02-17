import { Text as TextChakra } from '@chakra-ui/react';

import React from 'react';

function Text({ children, ...rest }) {
  return <TextChakra {...rest}>{children}</TextChakra>;
}

export default Text;
