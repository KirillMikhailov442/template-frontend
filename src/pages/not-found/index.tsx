import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 bg-[var(--color-gray)]">
      <h1 className="text-6xl sm:text-7xl font-bold text-center">404</h1>
      <p className="text-2xl sm:text-4xl text-center">Страница не найдена</p>
      <button
        className="bg-[var(--color-blue)] p-2 rounded-lg cursor-pointer hover:brightness-90 transition text-white"
        onClick={() => navigate(-1)}
      >
        Вернуться
      </button>
    </div>
  );
};

export default Page404;
