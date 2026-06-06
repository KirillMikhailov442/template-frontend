import { Text } from '@chakra-ui/react';
import { Wrench } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Text
      className={twMerge('flex items-center gap-2', className)}
      fontSize={'xl'}>
      <div className="w-[40px] h-[40px] bg-[var(--color-blue)] text-white rounded flex items-center justify-center">
        <Wrench size={18} />
      </div>
      Панель управления
    </Text>
  );
};

export default Logo;
