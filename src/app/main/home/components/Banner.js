import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import Carousel from '../../../../@common/components/Carousel';

import imgBanner from '../../../assets/banner.png';

const Portadas = props => {
  return (
    <Box {...props}>
      <Image
        src={imgBanner}
        alt="Banner"
        mt={['71px', '71px', '0px', '0px']}
        width={['100%', '100%', '100%', '100%']}
        height={['auto', 'auto', 'auto', 'auto']}
        minHeight="257px"
        objectFit="cover"
      />
    </Box>
  );
};

function Banner(props) {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '257px',
        background: '#f4f4f4',
      }}
    >
      <Carousel type="banner" removeArrowOnDeviceType={['tablet', 'mobile']}>
        {Array(12)
          .fill(0)
          .map((item, index) => {
            return (
              <Portadas
                key={index}
                width={['100%', '100%', '100%', '100%']}
                height={['auto', 'auto', 'auto', 'auto']}
              />
            );
          })}
      </Carousel>
    </section>
  );
}

export default Banner;
