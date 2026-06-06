import type { FC } from 'react';

export const TestPage: FC = () => {
  const [status, setStatus] = useState<string>('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await testFetch();
        setStatus('Data fetched successfully');
      } catch {
        setStatus('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          🎨 Tailwind CSS v4
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Этот проект настроен с Tailwind CSS v4!
        </p>
        <Button>sds</Button>

        <div
          className={`p-6 rounded-lg border-2 ${status.includes('Error') ? 'bg-red-50 border-red-300' : 'bg-green-50 border-green-300'}`}>
          <p
            className={`text-lg font-semibold ${status.includes('Error') ? 'text-red-700' : 'text-green-700'}`}>
            📊 Статус: {status}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
            Кнопка 1
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
            Кнопка 2
          </button>
        </div>
      </div>
    </div>
  );
};
