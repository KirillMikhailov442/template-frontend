import { useEffect, useRef, useState } from 'react';

import { DeviceBreakpoint, DeviceTypeBreakpoint } from '@shared/constants';

export interface DeviceBreakpointFlags {
  isPhone: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isLaptopL: boolean;
  isDesktop: boolean;
}

const getBreakpoint = (width: number): DeviceTypeBreakpoint => {
  if (width <= DeviceBreakpoint.Phone) return DeviceTypeBreakpoint.Phone;
  else if (width <= DeviceBreakpoint.Tablet) return DeviceTypeBreakpoint.Tablet;
  else if (width <= DeviceBreakpoint.Laptop) return DeviceTypeBreakpoint.Laptop;
  else if (width <= DeviceBreakpoint.LaptopL)
    return DeviceTypeBreakpoint.LaptopL;
  return DeviceTypeBreakpoint.Desktop;
};

export const useDeviceBreakpoint = (): DeviceBreakpointFlags => {
  const getFlags = (width: number): DeviceBreakpointFlags => {
    return {
      isPhone: width <= DeviceBreakpoint.Phone,
      isTablet:
        width > DeviceBreakpoint.Phone && width <= DeviceBreakpoint.Tablet,
      isLaptop:
        width > DeviceBreakpoint.Tablet && width <= DeviceBreakpoint.Laptop,
      isLaptopL:
        width > DeviceBreakpoint.Laptop && width <= DeviceBreakpoint.LaptopL,
      isDesktop: width > DeviceBreakpoint.LaptopL,
    };
  };

  const [flags, setFlags] = useState<DeviceBreakpointFlags>(() => {
    if (typeof window === 'undefined') {
      return {
        isPhone: true,
        isTablet: false,
        isLaptop: false,
        isLaptopL: false,
        isDesktop: false,
      };
    }
    return getFlags(window.innerWidth);
  });
  const currentBreakpointRef = useRef(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = getBreakpoint(window.innerWidth);

      if (newBreakpoint !== currentBreakpointRef.current) {
        currentBreakpointRef.current = newBreakpoint;
        setFlags(getFlags(window.innerWidth));
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return flags;
};
