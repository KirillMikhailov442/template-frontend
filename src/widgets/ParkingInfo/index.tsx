import { Text } from '@chakra-ui/react';

const ParkingInfo = () => {
  return <div className="h-[200px] w-[200px] bg-[var(--color-white)] flex flex-col gap-2 p-3 align-center rounded-3xl shadow-lg">
    <Text className={"font-bold mb-8"}>Парковка строения 1</Text>
    <div className="grid grid-cols-2 gap-2 place-items-center">
      <Text>Свободно</Text>
      <Text>Занято</Text>
      <Text className='text-7xl font-extralight text-[var(--color-blue)]'>42</Text>
      <Text className='text-7xl font-extralight text-gray-400'>58</Text>
    </div>
  </div>
}

export default ParkingInfo;