import { NavLink } from 'react-router';

import { AppRoute } from '@shared/constants';
import Logo from '@shared/ui/logo';
import { Blocks, TabletSmartphone } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Sidebar = () => {
  return (
    <div className="w-[300px] border-r-2 border-[var(--color-gray)] px-3 py-8 bg-[var(--color-white)]">
      <Logo className="mb-10" />
      <ul className="space-y-2">
        <li>
          <NavLink
            to={AppRoute.Root}
            className={({ isActive }) =>
              twMerge(
                isActive ? 'text-white bg-[var(--color-blue)]' : '',
                'flex items-center gap-2 p-2 rounded font-bold',
              )
            }>
            <TabletSmartphone size={18} />
            Подключенные устройства
          </NavLink>
        </li>
        <li>
          <NavLink
            to={AppRoute.Templates}
            className={({ isActive }) =>
              twMerge(
                isActive ? 'text-white bg-[var(--color-blue)]' : '',
                'flex items-center gap-2 p-2 rounded',
              )
            }>
            <Blocks />
            Шаблоны
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
