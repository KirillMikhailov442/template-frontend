import { AppRoute } from '@/shared/constants';

import { useNavigate } from 'react-router';

import { Button, Text } from '@chakra-ui/react';
import { ChevronLeft } from 'lucide-react';

const LeftSideBar = () => {
  const navigation = useNavigate();
  return (
    <aside className="basis-[300px] bg-[var(--color-white)] px-2 py-4  border-r-2 border-gray">
      <header className="flex items-center gap-2">
        <Button
          onClick={() => navigation(AppRoute.Root)}
          variant={'outline'}
          colorScheme={'blue'}
          size={'sm'}
          w={'30px'}>
          <ChevronLeft />
        </Button>
        <Text> Название шаболона</Text>
      </header>
    </aside>
  );
};

export default LeftSideBar;
