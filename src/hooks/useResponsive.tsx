import { TBreakpoint } from '@/interfaces/TBreakpoint';
import { useEffect, useState } from 'react';

const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

const useResponsive = (): TBreakpoint => {
  const [responsiveSize, setResponsiveSize] = useState<TBreakpoint>('desktop');

  useEffect(() => {
    const handleResize = (): void => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= breakpoints.mobile) {
        setResponsiveSize('mobile');
      } else if (windowWidth <= breakpoints.tablet) {
        setResponsiveSize('tablet');
      } else {
        setResponsiveSize('desktop');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return responsiveSize;
};

export default useResponsive;
