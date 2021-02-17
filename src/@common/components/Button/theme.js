const Button = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  sizes: {
    sm: {
      fontSize: '12px',
      lineHeight: '14px',
      padding: '12px',
    },
    md: {
      fontSize: '14px',
      lineHeight: '16px',
      padding: '14px',
    },
    lg: {
      fontSize: '18px',
      lineHeight: '20px',
      padding: '18px',
    },
  },
  variants: {
    orange: {
      bg: 'orange.400',
      color: 'gray.0',
      _focus: {
        border: '1px solid',
        borderColor: 'orange.300',
        boxShadow: 'none',
      },
    },
    gray: {
      bg: 'gray.200',
      color: 'gray.0',
      _focus: {
        border: '1px solid',
        borderColor: 'gray.100',
        boxShadow: 'none',
      },
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'orange',
  },
};

export default Button;
