import { Spinner } from '@chakra-ui/react';

const LoadingRigfhtSideBar = () => {
  return (
    <div className="flex items-center justify-center basis-[300px] bg-[var(--color-white)] px-2 py-4  border-l-2 border-gray flex-col gap-4">
      <Spinner size="xl" color="blue" />
    </div>
  );
};

export default LoadingRigfhtSideBar;
