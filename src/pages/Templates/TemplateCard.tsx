import { IconButton, Menu, Portal } from '@chakra-ui/react';
import { LucideEdit, LucideMoreVertical, LucideTrash } from 'lucide-react';
import { useState } from 'react';
import RemoveTemplateForm from '@widgets/RemoveTemplateForm';

type IProps = {
  imgSrc: string;
  title: string;
  id: string;
  onChange: () => void;
};

const TemplateCard = ({ imgSrc, title, id, onChange }: IProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const onModalClose = () => {
    setIsDeleteModalOpen(false);
  }

  return (
    <>
    <div className="min-w-[200px] max-w-[300px] rounded-2xl overflow-hidden flex flex-col shadow-md relative group">
      <div className="absolute top-2 right-2">
        <Menu.Root>
          <Menu.Trigger>
            <IconButton rounded="xl" size="xs" className="opacity-50 md:opacity-0 group-hover:opacity-50">
              <LucideMoreVertical />
            </IconButton>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="edit">
                  <LucideEdit />
                  Редактировать
                </Menu.Item>
                <Menu.Item value="delete" onClick={() => setIsDeleteModalOpen(true)}>
                  <LucideTrash />
                  Удалить
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </div>

      <div className="grow w-full">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center border-t bg-[var(--color-white)]">
        {title}
      </div>
    </div>
      <RemoveTemplateForm
        isOpen={isDeleteModalOpen}
        onClose={onModalClose}
        nodeName={title}
        nodeId={id}
        onSuccess={onChange}
      />
    </>
  );
};

export default TemplateCard;
