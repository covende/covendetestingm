import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Button,
  Divider,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import Select from '../../../@common/components/Select';

import logo1 from '../../assets/logos/logo1.svg';

import {
  MdPlayArrow,
  MdArrowDropDown,
  MdClose,
  MdMenu,
  BiCartAlt,
  BiUser,
  BiSearch,
} from 'react-icons/all';

const Search = props => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      direction="row"
      w="100%"
      background="gray.300"
      p={['16px 0px', '16px 0px', 0, 0]}
    >
      <Select
        mx="4px"
        maxWidth={['162px', '162px', '220px', '220px']}
        placeholder="LA VICTORIA"
      >
        <option value="1">Vehículo 1</option>
        <option value="2">Vehículo 2</option>
        <option value="3">Vehículo 3</option>
      </Select>
      <Select
        mx="4px"
        maxWidth={['80px', '80px', '220px', '220px']}
        placeholder="USD"
      >
        <option value="1">Vehículo 1</option>
        <option value="2">Vehículo 2</option>
        <option value="3">Vehículo 3</option>
      </Select>
      <Select
        mx="4px"
        maxWidth={['80px', '80px', '220px', '220px']}
        placeholder="ES"
      >
        <option value="1">Vehículo 1</option>
        <option value="2">Vehículo 2</option>
        <option value="3">Vehículo 3</option>
      </Select>
    </Flex>
  );
};

const dataLandingPageLinks = [
  'Nosotros',
  'Marcas',
  'Servicios',
  'Tiendas',
  'Contáctanos',
];

const LandingPageLinks = props => {
  return (
    <>
      <Box flex="1" padding="32px 18px 16px 18px" width="100%" textAlign="left">
        {dataLandingPageLinks.map((item, index) => (
          <Text key={index} variant="subtitle1" height="54px">
            {item}
          </Text>
        ))}
      </Box>
      <Divider />
    </>
  );
};

const MenuItem = props => {
  const { title, content } = props;
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            px="0px"
            height="54px"
            _hover={{ background: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
          >
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            {isExpanded ? (
              <MdArrowDropDown
                style={{ width: '24px', height: '24px', color: '#00224d' }}
              />
            ) : (
              <MdPlayArrow
                style={{
                  marginRight: '4px',
                  width: '17px',
                  height: '16px',
                  color: '#00224d',
                }}
              />
            )}
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <Text>{content}</Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const dataMenu = [
  { title: 'europeo', path: '/europeo', content: 'No hay contenido' },
  { title: 'americano', path: '/americano', content: 'No hay contenido' },
  {
    title: 'maquinaria pesada',
    path: '/maquinaria-pesasa ',
    content: 'No hay contenido',
  },
  { title: 'general', path: '/general', content: 'No hay contenido' },
  { title: 'motores', path: '/motores', content: 'No hay contenido' },
  { title: 'asiático', path: '/asiático', content: 'No hay contenido' },
];

const Menu = props => {
  return (
    <Accordion allowToggle width="100%" px="18px">
      {dataMenu.map((item, index) => (
        <MenuItem
          key={index}
          title={
            <Text
              variant="subtitle1"
              textTransform="uppercase"
              fontWeight="bold"
            >
              {item.title}
            </Text>
          }
          content={item.content}
        />
      ))}
    </Accordion>
  );
};

function HeaderResponsive({ show, toggleMenu, ...rest }) {
  return (
    <Flex
      as="nav"
      position="fixed"
      height={show ? '100%' : 'auto'}
      overflow="auto"
      overflowY="auto"
      zIndex="1"
      display={{ base: 'flex', md: 'none' }}
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bg={['white', 'white', 'white', 'white']}
      color={['white', 'white', 'blue.700', 'blue.700']}
      {...rest}
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Flex align="center" display={{ base: 'flex', md: 'none' }} p="15px 18px">
        <Image src={logo1} mr="16px" />
        <Box width="40px" height="40px" onClick={toggleMenu}>
          {show ? (
            <MdClose color="black" style={{ width: '32px', height: '40px' }} />
          ) : (
            <MdMenu color="black" style={{ width: '32px', height: '40px' }} />
          )}
        </Box>
      </Flex>
      <Flex align="center" p="15px 18px">
        <Box
          display={{ base: 'block', md: 'none' }}
          mr="8px"
          width="24px"
          height="40px"
        >
          <BiSearch color="black" style={{ width: '24px', height: '40px' }} />
        </Box>
        <Box
          display={{ base: 'block', md: 'none' }}
          mr="8px"
          width="24px"
          height="40px"
        >
          <BiUser color="black" style={{ width: '24px', height: '40px' }} />
        </Box>
        <Box display={{ base: 'block', md: 'none' }} width="2px" height="42px">
          <svg
            width="1"
            height="41"
            viewBox="0 0 1 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499998"
              y2="41"
              stroke="#252525"
              strokeOpacity="0.51"
            />
          </svg>
        </Box>
        <Box
          display={{ base: 'grid', md: 'none' }}
          alignItems="center"
          justifyContent="center"
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

        <Box
          display={{ base: 'block', md: 'none' }}
          ml="8px"
          width="24px"
          height="40px"
          zIndex="1000"
        >
          <BiCartAlt color="black" style={{ width: '24px', height: '40px' }} />
        </Box>
      </Flex>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'none' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'space-between', 'flex-end']}
          direction={['column', 'column', 'row', 'row']}
        >
          <Search />
          <Menu />
          <LandingPageLinks />
          <Box
            display={{ base: 'block', md: 'none' }}
            margin="8px"
            marginTop="32px"
            px="18px"
            width="100%"
            height="40px"
          >
            <svg
              width="120"
              height="29"
              viewBox="0 0 120 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.124 2.46392C69.8547 3.18557 68.4514 3.70962 66.9587 3.99313C65.752 2.7646 64.0447 2 62.1587 2C58.5296 2 55.5888 4.82646 55.5888 8.31443C55.5888 8.81272 55.6514 9.29382 55.7587 9.75773C50.3061 9.48282 45.4615 6.97423 42.2257 3.1512C41.6626 4.08763 41.3408 5.1701 41.3408 6.3299C41.3408 8.52062 42.5028 10.4536 44.2637 11.579C43.1821 11.5447 42.1721 11.2612 41.2872 10.7887C41.2872 10.8144 41.2872 10.8402 41.2872 10.866C41.2872 13.9244 43.5486 16.4759 46.552 17.0515C45.9978 17.1976 45.4168 17.2749 44.8179 17.2749C44.3978 17.2749 43.9866 17.232 43.5844 17.1632C44.4246 19.6718 46.8469 21.4931 49.7162 21.5447C47.4726 23.2457 44.6391 24.2509 41.5642 24.2509C41.0369 24.2509 40.5095 24.2251 40 24.1649C42.905 25.9519 46.3553 27 50.0648 27C62.1408 27 68.7464 17.3866 68.7464 9.04467C68.7464 8.76976 68.7374 8.50344 68.7285 8.22852C70.0067 7.33505 71.124 6.2268 72 4.96392C70.8201 5.47079 69.5598 5.80584 68.2279 5.96048C69.5866 5.1701 70.6324 3.93299 71.124 2.46392Z"
                fill="#002D64"
              />
              <path
                d="M13.2345 14.4455L13.859 9.71287H9.09496V6.70297C9.09496 5.33663 9.4777 4.40594 11.4719 4.40594H14V0.188119C13.5568 0.128713 12.0561 0 10.2935 0C6.63741 0 4.1295 2.19802 4.1295 6.23762V9.72277H0V14.4554H4.1295V29.0099C5.8518 28.9802 7.51367 28.7228 9.09496 28.2772V14.4455H13.2345Z"
                fill="#002D64"
              />
              <path
                d="M113.709 5.67459C112.818 5.67459 112.093 6.4001 112.093 7.29092C112.093 8.18173 112.818 8.90724 113.709 8.90724C114.6 8.90724 115.326 8.18173 115.326 7.29092C115.326 6.4001 114.6 5.67459 113.709 5.67459Z"
                fill="#002D64"
              />
              <path
                d="M106.5 7.56631C102.67 7.56631 99.5663 10.6704 99.5663 14.5C99.5663 18.3296 102.67 21.4337 106.5 21.4337C110.33 21.4337 113.434 18.3296 113.434 14.5C113.434 10.6704 110.33 7.56631 106.5 7.56631ZM106.5 19C104.011 19 102 16.9888 102 14.5C102 12.0112 104.011 9.99999 106.5 9.99999C108.989 9.99999 111 12.0112 111 14.5C111 16.9888 108.989 19 106.5 19Z"
                fill="#002D64"
              />
              <path
                d="M119.293 5.65612C118.953 4.75612 118.42 3.93878 117.732 3.26837C117.061 2.57959 116.244 2.04694 115.344 1.70714C114.481 1.37653 113.507 1.14694 112.065 1.08265C110.623 1.01837 110.164 1 106.5 1C102.836 1 102.377 1.01837 100.935 1.08265C99.4929 1.14694 98.5194 1.37653 97.6561 1.70714C96.7561 2.04694 95.9388 2.57959 95.2684 3.26837C94.5796 3.93878 94.0469 4.75612 93.7071 5.65612C93.3765 6.51939 93.1469 7.49286 93.0827 8.93469C93.0184 10.3765 93 10.8357 93 14.5C93 18.1643 93.0184 18.6235 93.0827 20.0653C93.1469 21.498 93.3765 22.4806 93.7071 23.3439C94.0469 24.2439 94.5796 25.0612 95.2684 25.7316C95.9388 26.4204 96.7561 26.9531 97.6561 27.2929C98.5102 27.6235 99.4929 27.8531 100.935 27.9173C102.377 27.9816 102.836 28 106.5 28C110.164 28 110.623 27.9816 112.065 27.9173C113.498 27.8531 114.481 27.6235 115.344 27.2929C117.153 26.5949 118.595 25.1622 119.293 23.3439C119.623 22.4806 119.853 21.5071 119.917 20.0653C119.982 18.6235 120 18.1643 120 14.5C120 10.8357 119.982 10.3765 119.917 8.93469C119.853 7.49286 119.623 6.51939 119.293 5.65612ZM117.493 19.9551C117.429 21.2684 117.208 21.9847 117.024 22.4622C116.574 23.6378 115.638 24.5745 114.462 25.0245C113.985 25.2082 113.268 25.4286 111.955 25.4929C110.532 25.5571 110.109 25.5755 106.5 25.5755C102.891 25.5755 102.468 25.5663 101.045 25.4929C99.7316 25.4286 99.0153 25.2173 98.5378 25.0245C97.95 24.8041 97.4173 24.4643 96.9857 24.0143C96.5357 23.5827 96.1959 23.05 95.9755 22.4622C95.7918 21.9847 95.5714 21.2684 95.5071 19.9551C95.4429 18.5316 95.4245 18.1 95.4245 14.5C95.4245 10.8908 95.4429 10.4684 95.5071 9.0449C95.5714 7.73163 95.7827 7.01531 95.9755 6.53776C96.1959 5.95 96.5357 5.41735 96.9857 4.98571C97.4173 4.53571 97.95 4.19592 98.5378 3.97551C99.0153 3.79184 99.7316 3.57143 101.045 3.50714C102.468 3.44286 102.891 3.42449 106.5 3.42449C110.109 3.42449 110.532 3.44286 111.955 3.50714C113.268 3.57143 113.985 3.78265 114.462 3.97551C115.05 4.19592 115.583 4.53571 116.014 4.98571C116.464 5.41735 116.804 5.95 117.024 6.53776C117.208 7.01531 117.429 7.73163 117.493 9.0449C117.557 10.4684 117.576 10.8908 117.576 14.5C117.566 18.1092 117.557 18.5316 117.493 19.9551Z"
                fill="#002D64"
              />
            </svg>
          </Box>

          <Box
            display={{ base: 'block', md: 'none' }}
            margin="8px"
            pt="24px"
            px="18px"
            width="100%"
          >
            <Button variant="orange" width="190px">
              trabaja con nosotros
            </Button>
            <Text
              variant="subtitle2"
              color="blue.800"
              width="240px"
              marginTop="32px"
              marginBottom="8px"
            >
              © 2020 M&M. All Rights Reserved Privacy Policy.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default HeaderResponsive;
