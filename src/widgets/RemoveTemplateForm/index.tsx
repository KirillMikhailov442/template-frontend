import { Button, Dialog, Portal } from '@chakra-ui/react';
import useRemoveTemplate from '@entities/template/hooks/use-remove-template.ts';

interface IProps {
  nodeId: string;
  nodeName: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RemoveTemplateForm = ({
  isOpen,
  onClose,
  nodeId,
  nodeName,
  onSuccess,
}: IProps) => {
  const removeTemplate = useRemoveTemplate({
    onSuccess: () => {
      onClose();
      onSuccess();
    },
  });

  const handleSubmit = () => {
    removeTemplate.mutate({ id: nodeId });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={e => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p={'5'} rounded="xl">
            <Dialog.Title>Удалить шаблон {nodeName}?</Dialog.Title>
            <Dialog.Footer>
              <Button variant="outline" rounded="xl" onClick={() => onClose()}>
                Отмена
              </Button>
              <Button bgColor='red' rounded='xl' loading={removeTemplate.isPending} onClick={handleSubmit}>
                Удалить
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default RemoveTemplateForm;
