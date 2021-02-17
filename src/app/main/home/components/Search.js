import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import Select from '../../../../@common/components/Select';
import Text from '../../../../@common/components/Text';
import Button from '../../../../@common/components/Button';

function Search() {
  return (
    <Flex
      as="nav"
      align={['center', 'center', 'center', 'center']}
      justify={['center', 'space-between', 'center', 'center']}
      direction={['column', 'column', 'row', 'row']}
      w="100%"
      bg="gray.300"
      pt={['16px', '16px', 0, 0]}
    >
      <Text
        variant="label"
        m={['8px auto 16px auto', '8px auto', '16px', '16px']}
        maxWidth="108px"
        fontSize={['sm', 'xs', 'sm', 'sm']}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
      >
        Del Vehículo
      </Text>
      <Select
        m={['0px 16px 16px 16px', '8px auto', '16px 8px', '16px 8px']}
        maxWidth={['290px', '326px', '220px', '220px']}
        placeholder="MARCA"
      >
        <option value="1">Vehículo 1</option>
        <option value="2">Vehículo 2</option>
        <option value="3">Vehículo 3</option>
      </Select>
      <Text
        variant="label"
        m={['8px auto 16px auto', '8px auto', '16px', '16px']}
        maxWidth="108px"
        fontSize={['sm', 'xs', 'sm', 'sm']}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
      >
        Del Producto
      </Text>
      <Select
        m={['0px 16px 16px 16px', '8px auto', '16px 8px', '16px 8px']}
        maxWidth={['290px', '326px', '220px', '220px']}
        placeholder="MARCA"
      >
        <option value="1">Vehículo 1</option>
        <option value="2">Vehículo 2</option>
        <option value="3">Vehículo 3</option>
      </Select>
      <Select
        m={['0px 16px 24px 16px', '8px 16px 24px 16px', '16px 8px', '16px 8px']}
        maxWidth={['290px', '326px', '220px', '220px']}
        placeholder="SISTEMA"
      >
        <option value="1">Vehículo 1</option>
        <option value="2">Vehículo 2</option>
        <option value="3">Vehículo 3</option>
      </Select>
      <Box
        bg={['gray.0', 'gray.0', 'gray.300', 'gray.300']}
        w={['100%', '100%', '100%', 'max-content']}
        textAlign={['center', 'center', 'center', 'center']}
        p={4}
      >
        <Button
          variant="orange"
          size="md"
          margin={['auto', 'auto', 'auto', 'auto']}
          width={['132px', '132px', '132px', '176px']}
        >
          Buscar
        </Button>
      </Box>
    </Flex>
  );
}

export default Search;
