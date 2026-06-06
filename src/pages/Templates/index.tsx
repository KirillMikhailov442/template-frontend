import { Button } from '@chakra-ui/react';

import TemplateCard from './TemplateCard';

const mockData = [
  {
    id: 1,
    title: 'Шаблон 1',
    imgSrc: '/template.webp',
  },
  {
    id: 2,
    title: 'Шаблон 2',
    imgSrc: '/template.webp',
  },
  {
    id: 3,
    title: 'Шаблон 3',
    imgSrc: '/template.webp',
  },
  {
    id: 4,
    title: 'Шаблон 4',
    imgSrc: '/template.webp',
  },
];

const Templates = () => {
  const data = mockData;

  const renderTemplateCards = () => {
    return mockData.map(item => {
      return <TemplateCard key={item.id} {...item} />;
    });
  };
  return (
    <div className="h-full grow p-5">
      <div className="flex justify-end pb-5">
        <Button rounded="xl" backgroundColor="var(--color-blue)">
          Добавить шаблон
        </Button>
      </div>
      <div className="grid w-full gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center">
        {data && renderTemplateCards()}
      </div>
    </div>
  );
};

export default Templates;
