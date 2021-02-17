const Tabs = {
  baseStyle: {
    root: {
      display: 'block',
    },
    tab: {
      flex: 1,
      transition: 'all 0.2s',
      color: 'gray.300',
      textTransform: 'uppercase',
      fontSize: '16px',
      fontWeight: '700',
      whiteSpace: 'nowrap',
      _focus: {
        zIndex: 1,
        boxShadow: 'none',
      },
      _selected: {
        color: 'blue.800',
        borderBottomWidth: '4px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'blue.800',
      },
    },
    tablist: {
      display: 'flex',
      justifyContent: ['start', 'start', 'center', 'center'],
      flexDirection: 'row',
      borderColor: 'inherit',
      width: ['100%', '100%', 'fit-content', 'fit-content'],
      margin: 'auto',
      overflow: ['auto', 'auto', 'hidden', 'hidden'],
    },
    tabpanel: { p: 4 },
  },
  sizes: {
    sm: {
      fontSize: '12px',
      padding: '12px',
    },
    md: {
      fontSize: '16px',
      padding: '16px',
    },
    lg: {
      fontSize: '18px',
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

export default Tabs;
