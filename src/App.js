import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './app/configs/themesConfig';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
