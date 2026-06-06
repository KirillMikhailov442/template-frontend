import { Outlet } from 'react-router';

import { twMerge } from 'tailwind-merge';

const MainLayout = () => {
  return (
    <div className={twMerge('w-full h-screen flex bg-[var(--color-gray)]')}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
