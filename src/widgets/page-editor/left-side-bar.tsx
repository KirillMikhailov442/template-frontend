import useEditor from '@/entities/template/hooks/use-editor';
import { AppRoute } from '@/shared/constants';

import { useNavigate } from 'react-router';

import { Button, Input } from '@chakra-ui/react';
import { ChevronLeft } from 'lucide-react';

const LeftSideBar = () => {
  const navigation = useNavigate();
  const { templateName, setTemplateName } = useEditor();
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
        <Input
          value={templateName}
          onChange={e => setTemplateName(e.target.value)}
          placeholder="Название шаблона"
        />
      </header>
    </aside>
  );
};

export default LeftSideBar;
