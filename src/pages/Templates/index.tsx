import { useState } from 'react';

import { Button } from '@chakra-ui/react';
import useGetTemplates from '@entities/template/hooks/use-get-templates.ts';
import Loading from '@shared/ui/Loading';
import AddTemplateForm from '@widgets/AddTemplateForm';

import TemplateCard from './TemplateCard';

interface ITemplate {
  id: string;
  title: string;
  imgSrc: string;
}

const mockData: ITemplate[] = [
  {
    id: '1',
    title: 'Шаблон 1',
    imgSrc: '/mockTemplate.webp',
  },
  {
    id: '2',
    title: 'Шаблон 2',
    imgSrc: '/mockTemplate.webp',
  },
  {
    id: '3',
    title: 'Шаблон 3',
    imgSrc: '/mockTemplate.webp',
  },
  {
    id: '4',
    title: 'Шаблон 4',
    imgSrc: '/mockTemplate.webp',
  },
];

const Templates = () => {
  const [isAddTemplateFormOpen, setIsAddTemplateFormOpen] = useState<boolean>(false);

  const { isLoading, isError, data, refetch, isFetching } = useGetTemplates();

  const templates: ITemplate[] = data
    ? data.map(item => ({
      id: item.id,
      title: item.name,
      imgSrc: '/mockTemplate.webp',
    }))
    : [];



  const renderTemplateCards = () => {
    return (isError?mockData:templates).map(item => {
      return <TemplateCard key={item.id} {...item} onChange={handleRefresh}/>;
    });
  };

  const handleRefresh = () => {
    refetch();
  }

  if (isLoading || isFetching) return <Loading />;

  return (
    <>
      <div className="h-full grow p-5">
        <div className="flex justify-end pb-5">
          <Button rounded="xl" backgroundColor="var(--color-blue)" onClick={() => setIsAddTemplateFormOpen(true)}>
            Добавить шаблон
          </Button>
        </div>
        <div className="grid w-full gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center">
          {renderTemplateCards()}
        </div>
      </div>

      <AddTemplateForm
        isOpen={isAddTemplateFormOpen}
        onClose={() => setIsAddTemplateFormOpen(false)}
        onSuccess={handleRefresh}
      />
    </>
  );
};

export default Templates;
