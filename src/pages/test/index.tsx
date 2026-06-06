import { useEffect, useState, type FC } from 'react';

import { Button } from '@chakra-ui/react';

import { testFetch } from './fetch';

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

  return <div className="from-blue-50 to-indigo-100 p-8"></div>;
};
