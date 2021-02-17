import React from 'react';
import { Box, Image, Flex, Grid } from '@chakra-ui/react';

import Tabs from '../../../../@common/components/Tabs';
import Carousel from '../../../../@common/components/Carousel';
import Text from '../../../../@common/components/Text';

import imgProd1 from '../../../assets/producto_1.png';
import imgProd2 from '../../../assets/producto_2.png';
import imgProd3 from '../../../assets/producto_3.png';
import imgProd4 from '../../../assets/producto_4.png';

const ProductosImg = [imgProd1, imgProd2, imgProd3, imgProd4];

const CardProduct = props => {
  return (
    <Box
      margin={['0px', '0px', '16px', '16px']}
      padding={['0px', '0px', '18px', '18px']}
      width={['147px', '147px', '272px', '272px']}
      height={['216px', '216px', '362px', '362px']}
      background={['transparent', 'transparent', '#FFFFFF', '#FFFFFF']}
      boxSizing="border-box"
      whiteSpace="normal"
      _hover={{
        boxShadow: [
          'none',
          'none',
          '0px 0px 19px 6px rgba(0, 0, 0, 0.1)',
          '0px 0px 19px 6px rgba(0, 0, 0, 0.1)',
        ],
      }}
    >
      <Image
        src={props.productImage}
        alt={props.productAlt}
        width={['100%', '100%', '100%', '100%']}
      />
      <Flex align="baseline">
        <Box width="8px" height="8px" borderRadius="100%" bg="green" mr="4px" />
        <Text my="8px">En stock</Text>
      </Flex>
      <Text variant="subtitle1">Brandix Brake Kit BDXX 750Z370-S</Text>
    </Box>
  );
};

const Productos = Array(6)
  .fill(0)
  .map((item, index) => {
    return (
      <CardProduct
        key={index}
        productImage={ProductosImg[index % 4]}
        productAlt="Producto"
      />
    );
  });

function FeaturesSliders(props) {
  return (
    <section
      style={{
        padding: '32px 0px 16px 0px',
        width: '100%',
        maxWidth: '1280px',
        background: '#f4f4f4',
      }}
    >
      <Tabs
        tabList={['productos destacados', 'con descuento', 'más recientes']}
        tabPanels={[
          <>
            <Grid
              display={['grid', 'grid', 'grid', 'none']}
              templateColumns="repeat(2, 1fr)"
              gap="32px"
              justifyItems="center"
            >
              {Productos}
            </Grid>
            <Box
              display={['none', 'none', 'none', 'inherit']}
              visibility={['hidden', 'hidden', 'hidden', 'visible']}
            >
              <Carousel type="items">{Productos}</Carousel>
            </Box>
          </>,
          <div>Producto con Descuentos</div>,
          <div>Producto más recientes</div>,
        ]}
      ></Tabs>
    </section>
  );
}

export default FeaturesSliders;
