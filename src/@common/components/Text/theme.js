const Text = {
  variants: {
    label: {
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

export default Text;
