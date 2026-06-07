import { Outlet } from 'react-router';

import { useDeviceBreakpoint } from '@shared/hooks';
import Sidebar from '@widgets/sidebar';
import HedaerMobile from '@widgets/sidebar/mobile';
import { twMerge } from 'tailwind-merge';

const LayoutWithSidebar = () => {
  const { isTablet, isPhone } = useDeviceBreakpoint();
  return (
    <div className={twMerge((!isTablet && !isPhone) ? 'flex' : '', 'w-full')}>
      {(!isTablet && !isPhone) ? <Sidebar /> : <HedaerMobile />}
      <Outlet />
    </div>
  );
};

export default LayoutWithSidebar;
