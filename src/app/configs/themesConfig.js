import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// Comp
import Button from '../../@common/components/Button/theme';
import Tabs from '../../@common/components/Tabs/theme';
import Text from '../../@common/components/Text/theme';
import Input from '../../@common/components/Input/theme';

// Global style overrides
const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  orange: {
    50: '#ffeedb',
    100: '#ffd2ae',
    200: '#ffb57e',
    300: '#ff984c',
    400: '#FF6C00', // default
    500: '#e66100',
    600: '#b44c00',
    700: '#813500',
    800: '#4f1e00',
    900: '#200800',
  },
  blue: {
    0: '#ffffff',
    50: '#e1f2ff',
    100: '#b3d5ff',
    200: '#83b9fc',
    300: '#549dfb',
    400: '#2c81fa',
    500: '#1b67e1',
    600: '#1250b0',
    700: '#08397e',
    800: '#00224d', // default
    900: '#000b1e',
  },
  gray: {
    0: '#ffffff',
    50: '#F2F2F2', // added
    100: '#dcdcdc', // added
    200: '#c2c2c2', // added
    300: '#a6a6a6',
    400: '#838383', // added
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#252525', // default
    900: '#120b0d',
  },
  linkedin: {
    50: '#E8F4F9',
    100: '#CFEDFB',
    200: '#9BDAF3',
    300: '#68C7EC',
    400: '#34B3E4',
    500: '#00A0DC',
    600: '#008CC9',
    700: '#0077B5',
    800: '#005E93',
    900: '#004471',
  },

  facebook: {
    50: '#E8F4F9',
    100: '#D9DEE9',
    200: '#B7C2DA',
    300: '#6482C0',
    400: '#4267B2',
    500: '#385898',
    600: '#314E89',
    700: '#29487D',
    800: '#223B67',
    900: '#1E355B',
  },

  messenger: {
    50: '#D0E6FF',
    100: '#B9DAFF',
    200: '#A2CDFF',
    300: '#7AB8FF',
    400: '#2E90FF',
    500: '#0078FF',
    600: '#0063D1',
    700: '#0052AC',
    800: '#003C7E',
    900: '#002C5C',
  },

  whatsapp: {
    50: '#dffeec',
    100: '#b9f5d0',
    200: '#90edb3',
    300: '#65e495',
    400: '#3cdd78',
    500: '#22c35e',
    600: '#179848',
    700: '#0c6c33',
    800: '#01421c',
    900: '#001803',
  },

  twitter: {
    50: '#E5F4FD',
    100: '#C8E9FB',
    200: '#A8DCFA',
    300: '#83CDF7',
    400: '#57BBF5',
    500: '#1DA1F2',
    600: '#1A94DA',
    700: '#1681BF',
    800: '#136B9E',
    900: '#0D4D71',
  },

  telegram: {
    50: '#E3F2F9',
    100: '#C5E4F3',
    200: '#A2D4EC',
    300: '#7AC1E4',
    400: '#47A9DA',
    500: '#0088CC',
    600: '#007AB8',
    700: '#006BA1',
    800: '#005885',
    900: '#003F5E',
  },
};

const typography = {
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  fontSizes: {
    xs: '12px', // 0.75rem
    sm: '14px', // 0.875rem
    md: '16px', // 1rem
    lg: '18px', // 1.125rem
    xl: '20px', // 1.25rem
    '2xl': '24px', // 1.5rem
    '3xl': '30px', // 1.875rem
    '4xl': '36px', // 2.25rem
    '5xl': '48px', // 3rem
    '6xl': '60px', // 3.75rem
    '7xl': '72px', // 4.5rem
    '8xl': '96px', // 6rem
    '9xl': '128px', // 8rem
  },
};

const radius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

const breakpoints = createBreakpoints({
  sm: '360px', // 30em -> 22.5em
  md: '768px', // 48em
  lg: '1024px', // 62em -> 70.25em
  xl: '1280px', //80em
});

const overrides = {
  ...defaultTheme,
  breakpoints,
  radius,
  colors,
  typography,
  components: {
    Text,
    Button,
    Tabs,
    // Input,
  },
};
export default extendTheme(overrides);
