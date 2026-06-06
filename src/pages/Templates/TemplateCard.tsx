import { IconButton } from '@chakra-ui/react';
import { LucideEdit, LucideTrash } from 'lucide-react';

type IProps = {
  imgSrc: string;
  title: string;
};

const TemplateCard = ({ imgSrc, title }: IProps) => {
  return (
    <div className=" min-w-[200px] max-w-[300px] rounded-2xl overflow-hidden flex flex-col shadow-md relative group">
      <div className="absolute top-2 w-full opacity-0 group-hover:opacity-60 px-2 gap-2 flex justify-end transition">
        <IconButton size={'xs'} rounded={'lg'}>
          <LucideTrash />
        </IconButton>
        <IconButton size={'xs'} rounded={'lg'}>
          <LucideEdit />
        </IconButton>
      </div>
      <div className="grow w-full">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center border-t bg-[var(--color-white)]">
        {title}
      </div>
    </div>
  );
};

export default TemplateCard;
