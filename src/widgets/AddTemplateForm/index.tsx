import { useState } from 'react';

import { Dialog, Field, Portal, Input, Button } from '@chakra-ui/react';
import useAddTemplate from '@entities/template/hooks/use-add-template.ts';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddTemplateForm = ({ isOpen, onClose, onSuccess }: IProps) => {
  const [name, setName] = useState('');
  const addTemplate = useAddTemplate({
    onSuccess: () => {
      onClose();
      onSuccess();
    },
  });

  const handleSubmit = () => {
    addTemplate.mutate({
      name: name,
      widgets: [],
    });
  };
  return (
    <Dialog.Root open={isOpen} onOpenChange={e => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p={'5'} rounded="xl">
            <Dialog.Title>Добавление шаблона</Dialog.Title>
            <Dialog.Body>
              <Field.Root>
                <Field.Label>Название шаблона</Field.Label>
                <Input
                  placeholder="Введите название..."
                  rounded="xl"
                  onChange={e => setName(e.target.value)}
                />
              </Field.Root>
            </Dialog.Body>
            <Dialog.Footer>
              <Button rounded="xl" onClick={() => onClose()} variant="outline">
                Отмена
              </Button>
              <Button
                loading={addTemplate.isPending}
                backgroundColor="var(--color-blue)"
                rounded="xl"
                disabled={!name}
                onClick={() => {
                  handleSubmit();
                }}>
                Создать
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddTemplateForm;
