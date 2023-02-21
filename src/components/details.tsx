import { useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ListType } from './List';

export interface DetailSearch {
  id: string;
}

const Details = () => {
  const [data, setData] = useState<ListType>();
  const { id }: DetailSearch = useParams({ from: '/details/$id' });
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const json = await response.json();
      // ZOD VALIDATION HERE
      const { userId, ...mask } = json;
      setData(mask);
    };
    getData();
  }, [id]);
  return (
    <>
      <h2 className='text-3xl font-bold'>Details</h2>
      <div className='flex flex-col p-6'>
        <p>Id: {data?.id ?? '1'}</p>
        <p>Title: {data?.title ?? 'No'}</p>
        <p>Completed: {data?.completed.toString() ?? 'false'}</p>
      </div>
    </>
  );
};

export default Details;
