import { useEffect, useState, type FC } from 'react';

import { BACKEND_API_V1 } from '@shared/configs';

export const TestPage: FC = () => {
  const [status, setStatus] = useState<string>('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`${BACKEND_API_V1}/test`);
        setStatus('Data fetched successfully');
      } catch {
        setStatus('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page.</p>
      <p>Status: {status}</p>
    </div>
  );
};
