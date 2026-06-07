import { useEffect, useState, type FC } from 'react';

import { Checkbox, Table } from '@chakra-ui/react';

import useGetDevices from './use-get-devices';

interface Item {
  id: number;
  name: string;
}

const MainPage: FC = () => {
  const [selection, setSelection] = useState<string[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const indeterminate = selection.length > 0 && selection.length < items.length;

  const rows = items.map(item => (
    <Table.Row
      key={item.name}
      data-selected={selection.includes(item.name) ? '' : undefined}>
      <Table.Cell>
        <Checkbox.Root
          size="sm"
          mt="0.5"
          aria-label="Select row"
          checked={selection.includes(item.name)}
          onCheckedChange={changes => {
            setSelection(prev =>
              changes.checked
                ? [...prev, item.name]
                : selection.filter(name => name !== item.name),
            );
          }}>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
    </Table.Row>
  ));

  const devices = useGetDevices();

  useEffect(() => {
    if (devices.isSuccess) {
      setItems(devices.data || []);
    }
  }, [devices.data, devices.isSuccess]);

  if (devices.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader w="6">
            <Checkbox.Root
              size="sm"
              mt="0.5"
              aria-label="Select all rows"
              checked={indeterminate ? 'indeterminate' : selection.length > 0}
              onCheckedChange={changes => {
                setSelection(
                  changes.checked ? items.map(item => item.name) : [],
                );
              }}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
            </Checkbox.Root>
          </Table.ColumnHeader>
          <Table.ColumnHeader>Устройство</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table.Root>
  );
};

export default MainPage;
