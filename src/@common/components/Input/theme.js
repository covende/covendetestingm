const Input = {
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transition: 'all 0.2s',
    border: '1px solid',
    borderColor: 'inherit',
    bg: 'inherit',
    _hover: {
      borderColor: 'gray.300',
    },
    _readOnly: {
      boxShadow: 'none !important',
      userSelect: 'all',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    // _invalid: {
    //   borderColor: getColor(theme, ec),
    //   boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
    // },
    _focus: {
      zIndex: 1,
      borderColor: 'gray.300',
      boxShadow: `none`,
    },
  },
  addon: {
    border: '1px solid',
    borderColor: 'gray.300',
    bg: 'gray.300',
  },
  variants: {
    normal: {
      fontSize: 'xs',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '14px',
      letterSpacing: '0em',
    },
    title: {
      color: 'blue.800',
      fontSize: 'md',
      fontStyle: 'normal',
      fontWeight: 'black',
      lineHeight: 'tall',
      textTransform: 'uppercase',
    },
    subtitle1: {
      color: 'blue.800',
      fontSize: 'md',
      fontStyle: 'normal',
      fontWeight: 'medium',
      lineHeight: 'short',
      textTransform: 'capitalize',
    },
    subtitle2: {
      fontSize: 'sm',
      fontStyle: 'normal',
      fontWeight: 'medium',
      lineHeight: '14px',
      letterSpacing: '0em',
    },
  },
  defaultProps: {
    variant: 'label',
  },
};

export default Input;
