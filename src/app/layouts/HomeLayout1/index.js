import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';

function HomeLayout1(props) {
  return (
    <Flex bg="#f4f4f4" direction="column" align="center" m="0 auto" {...props}>
      <Header />
      {props.children}
      {/* Footer */}
    </Flex>
  );
}
export default HomeLayout1;
