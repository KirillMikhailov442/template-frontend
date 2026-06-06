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
];

const Templates = () => {
  const data = mockData;

  const renderTemplateCards = () => {
    return mockData.map(item => {
      return <TemplateCard key={item.id} {...item} />;
    });
  };
  return (
      <div className="h-full grow p-5 flex flex-wrap gap-5 content-start justify-evenly">
        {data && renderTemplateCards()}
      </div>
  );
};

export default Templates;
