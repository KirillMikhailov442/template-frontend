import clsx from 'clsx';

import calendar from './images/calendar.webp';
import pogoda from './images/pogoda.webp';
import s from './single-device.module.scss';

const SingleDevicePage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div
        className={clsx(
          'w-[450px] h-[800px] bg-[var(--color-white)]',
          s.board,
        )}>
        <img src={calendar} width={250} height={250} alt="Calendar" />
        <img src={pogoda} width={300} height={300} alt="Pogoda" />
      </div>
    </div>
  );
};

export default SingleDevicePage;
