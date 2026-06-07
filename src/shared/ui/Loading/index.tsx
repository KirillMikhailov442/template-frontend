import { Spinner } from '@chakra-ui/react';

const Loading = () => {

  return <div className={"flex items-center justify-center grow h-full"}>
    <Spinner size='xl' color={'var(--color-blue)'} />
  </div>
}

export default Loading;