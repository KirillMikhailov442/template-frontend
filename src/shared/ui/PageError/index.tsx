import { useNavigate } from 'react-router-dom';

const PageError = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 bg-[var(--color-gray)]">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">Произошла ошибка!</h1>
      <p className="text-2xl sm:text-4xl text-center">Не удалось загрузить данные</p>
      <button
        className="bg-[var(--color-blue)] p-2 rounded-2xl cursor-pointer hover:brightness-90 transition text-xl text-white"
        onClick={() => navigate(-1)}>
        Вернуться
      </button>
    </div>
  );
};

export default PageError;
