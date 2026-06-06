import { Outlet } from 'react-router';

import { useDeviceBreakpoint } from '@shared/hooks';
import Sidebar from '@widgets/sidebar';
import HedaerMobile from '@widgets/sidebar/mobile';
import { twMerge } from 'tailwind-merge';

const LayoutWithSidebar = () => {
  const { isTablet } = useDeviceBreakpoint();
  return (
    <div className={twMerge(!isTablet ? 'flex' : '', 'w-full')}>
      {!isTablet ? <Sidebar /> : <HedaerMobile />}
      <Outlet />
    </div>
  );
};

export default LayoutWithSidebar;
