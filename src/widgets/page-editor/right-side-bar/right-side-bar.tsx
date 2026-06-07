import useCatalog from '@/entities/template/hooks/use-catalog';

import { Text } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

import Item from './item';

const RightSideBar = () => {
  const { setNodeRef } = useDroppable({
    id: 'catalog',
  });

  const { catalog } = useCatalog();

  return (
    <div className="basis-[300px] bg-[var(--color-white)] px-2 py-4  border-l-2 border-gray flex flex-col gap-4">
      <Text className="mb-6" fontSize={'xl'}>
        Виджеты
      </Text>
      <ul ref={setNodeRef}>
        {catalog.map(widget => (
          <Item
            key={widget.id}
            id={widget.id}
            type={widget.name}
            text={widget.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default RightSideBar;
