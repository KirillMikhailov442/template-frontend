type IProps = {
  imgSrc: string;
  title: string;
}

const TemplateCard = ({imgSrc, title}: IProps) =>{
  return (
    <div className="h-[200px] w-[300px] rounded-2xl overflow-hidden flex flex-col shadow-md">
      <div className="grow w-full">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center border-t bg-[var(--color-white)]">
        {title}
      </div>
    </div>
  );
}

export default TemplateCard;