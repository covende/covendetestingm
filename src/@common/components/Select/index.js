import React from 'react';
import { Select as SelectChakra } from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';

function Select({ children, ...rest }) {
  return (
    <SelectChakra
      height="37px"
      background="gray.0"
      color="gray.800"
      fontStyle="normal"
      fontWeight="bold"
      fontSize="14px"
      lineHeight="16px"
      textTransform="uppercase"
      border="1px solid #C7C7C7"
      boxSizing="border-box"
      borderRadius="5px"
      _focus={{
        zIndex: 'unset',
        borderColor: '#8d8d8d',
        boxShadow: '0 0 0 0.5px #8d8d8d',
      }}
      icon={<MdArrowDropDown />}
      {...rest}
    >
      {children}
    </SelectChakra>
  );
}

export default Select;
