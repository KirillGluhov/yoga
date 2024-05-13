import { useState, useEffect } from 'react';
import { WidthOfScreen } from '../enums/breakpoints';

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenPC: width > WidthOfScreen.PC,
    isScreenTablet: width > WidthOfScreen.TABLET,
    isScreenMobile: width > WidthOfScreen.MOBILE
  };
};

export default useResize;