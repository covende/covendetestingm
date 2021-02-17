import React from 'react';

// Common components Chakra
import {
  Box,
  Flex,
  Button,
  InputGroup,
  InputRightElement,
  Image,
} from '@chakra-ui/react';

import Text from '../../../@common/components/Text';
import Input from '../../../@common/components/Input';
import logo2 from '../../assets/logos/logo2.svg';

import {
  MdClose,
  MdMenu,
  BiCartAlt,
  BiUser,
  BiSearch,
  BiPin,
  MdRoom,
  GiPin,
} from 'react-icons/all';

const MenuItems = props => {
  const { children, isLast, ...rest } = props;
  return (
    <Text
      color="gray.0"
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 4 }}
      display="block"
      fontSize="14px"
      {...rest}
    >
      <a href="#">{children}</a>
    </Text>
  );
};

const HeaderPage = ({ show, toggleMenu, ...rest }) => {
  return (
    <Flex
      as="nav"
      display={['none', 'none', 'flex', 'flex']}
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p="15px 18px"
      bg="gray.0"
      color="gray.800"
      {...rest}
    >
      <Flex
        align="center"
        justify="space-between"
        direction="row"
        pt={[4, 4, 0, 0]}
      >
        <MenuItems color="gray.800" to="/">
          Nosotros
        </MenuItems>
        <MenuItems color="gray.800" to="/">
          Marcas
        </MenuItems>
        <MenuItems color="gray.800" to="/">
          Servicios
        </MenuItems>
        <MenuItems color="gray.800" to="/">
          Tiendas
        </MenuItems>
        <MenuItems color="gray.800" to="/">
          Contáctanos
        </MenuItems>
      </Flex>

      <Flex
        align="center"
        justify="space-between"
        direction="row"
        pt={[4, 4, 0, 0]}
      >
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<BiSearch color="gray.300" />}
          />
          <Input
            type="search"
            placeholder="¿Qué estás buscando?"
            width="387px"
            height="37px"
          />
        </InputGroup>
      </Flex>

      <Flex
        align="center"
        justify="space-between"
        direction="row"
        pt={[4, 4, 0, 0]}
      >
        <Flex mr="8px" width="auto" height="40px" alignItems="center">
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3875 3.82422C14.6883 1.39648 11.994 0 8.99975 0C6.00554 0 3.31553 1.39648 1.61635 3.82422C-0.0741354 6.24336 -0.465251 9.30273 0.569033 12.0098C0.847159 12.7488 1.28608 13.4664 1.87275 14.1367L8.40873 21.725C8.55648 21.8969 8.77377 21.9957 8.99975 21.9957C9.22572 21.9957 9.44301 21.8969 9.59076 21.725L16.1224 14.1367C16.7134 13.4621 17.1523 12.7445 17.4261 12.0098C18.4647 9.30703 18.078 6.24336 16.3875 3.82422ZM15.9746 11.477C15.7617 12.0441 15.4184 12.6027 14.949 13.1398L14.9447 13.1441L8.99975 20.0449L3.05479 13.1398C2.58545 12.6027 2.24214 12.0441 2.02485 11.4727C1.16874 9.23398 1.49467 6.70312 2.894 4.70078C4.29767 2.68984 6.52268 1.53828 8.99975 1.53828C11.4768 1.53828 13.7018 2.68984 15.1055 4.70078C16.5048 6.70312 16.8307 9.23398 15.9746 11.477Z"
              fill="black"
            />
            <path
              d="M8.99841 4.56323C6.59523 4.56323 4.63965 6.49683 4.63965 8.873C4.63965 11.2492 6.59523 13.1828 8.99841 13.1828C11.4016 13.1828 13.3572 11.2492 13.3572 8.873C13.3572 6.49683 11.4016 4.56323 8.99841 4.56323ZM8.99841 11.6402C7.45568 11.6402 6.19976 10.3984 6.19976 8.873C6.19976 7.34761 7.45568 6.10581 8.99841 6.10581C10.5411 6.10581 11.7971 7.34761 11.7971 8.873C11.7971 10.3984 10.5455 11.6402 8.99841 11.6402Z"
              fill="black"
            />
          </svg>

          <MenuItems ml="12px" color="gray.800" to="/">
            La Victoria
          </MenuItems>
        </Flex>
        <Flex mr="8px" width="auto" height="40px" alignItems="center">
          <BiUser
            color="black"
            style={{ marginRight: '8px', width: '24px', height: '40px' }}
          />
          <MenuItems color="gray.800" to="/">
            Mi cuenta
          </MenuItems>
        </Flex>
        <Box
          alignItems="center"
          justifyContent="center"
          color="gray.0"
          bg="orange.400"
          borderRadius="100%"
          fontSize="14px"
          padding="1px 0px"
          textAlign="center"
          marginLeft="8px"
          width="24px"
          height="24px"
        >
          01
        </Box>

        <Box ml="8px" width="24px" height="40px" zIndex="1000">
          <BiCartAlt color="black" style={{ width: '24px', height: '40px' }} />
        </Box>
      </Flex>
    </Flex>
  );
};

const HeaderCategories = ({ show, toggleMenu, ...rest }) => {
  return (
    <Flex
      as="nav"
      display={['none', 'none', 'flex', 'flex']}
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p="15px 18px"
      bg="blue.800"
      color="gray.800"
      {...rest}
    >
      <Flex align="center">
        <Image src={logo2} mr="32px" />
        <MenuItems to="/">EUROPEO</MenuItems>
        <MenuItems to="/">AMERICANO</MenuItems>
        <MenuItems to="/">MAQUINARIA PESADA</MenuItems>
        <MenuItems to="/">GENERAL</MenuItems>
        <MenuItems to="/">MOTORES</MenuItems>
        <MenuItems to="/">ASIÁTICO</MenuItems>
      </Flex>

      <Flex
        align={['center', 'center', 'center', 'center']}
        justify={['center', 'space-between', 'space-between', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItems to="/">USD</MenuItems>
        <MenuItems to="/">ES</MenuItems>
      </Flex>
    </Flex>
  );
};

const HeaderDesktop = ({ show, toggleMenu, ...rest }) => {
  return (
    <>
      {<HeaderPage show={show} toggleMenu={toggleMenu} {...rest} />}
      {<HeaderCategories show={show} toggleMenu={toggleMenu} {...rest} />}
    </>
  );
};

export default HeaderDesktop;
