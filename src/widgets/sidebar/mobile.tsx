import { useState } from 'react';
import { NavLink } from 'react-router';

import { Button, CloseButton, Drawer } from '@chakra-ui/react';
import { AppRoute } from '@shared/constants';
import Logo from '@shared/ui/logo';
import { Blocks, Menu, TabletSmartphone } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer.Root
        open={isOpen}
        size={'full'}
        onOpenChange={() => setIsOpen(prev => !prev)}>
        <div className="h-[60px] w-full flex items-center justify-between bg-[var(--color-white)] py-1 px-4">
          <Logo />
          <Button
            variant={'outline'}
            colorScheme={'blue'}
            width={'40px'}
            onClick={() => setIsOpen(true)}>
            <Menu size={18} />
          </Button>
        </div>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Title>Панель управления</Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="xl" />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
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
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};

export default HeaderMobile;
