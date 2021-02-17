import React from 'react';

// Components
import HeaderResponsive from './HeaderResponsive';
import HeaderDesktop from './HeaderDesktop';

const Header = props => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <>
      {<HeaderResponsive show={show} toggleMenu={toggleMenu} {...props} />}
      {<HeaderDesktop show={show} toggleMenu={toggleMenu} {...props} />}
    </>
  );
};

export default Header;
