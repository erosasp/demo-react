import List, { ListType } from './List';
import { useEffect, useState } from 'react';

const Index = () => {
  const [data, setData] = useState<ListType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = (await response.json()).slice(0, 20).map((m: ListType) => {
        return { id: m.id, title: m.title, completed: m.completed } as ListType;
      });
      setData(json);
    };
    getData();
  }, []);
  return (
    <div className='flex flex-col items-center justify-center text-center pt-12'>
      <h2 className='text-3xl font-bold'>ToDos</h2>
      <List parentData={data} />
    </div>
  );
};

export default Index;
