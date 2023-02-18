import List, { ListType } from "./list";
import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState<ListType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = (await response.json()).slice(0, 20).map((m: ListType) => {
        return { id: m.id, title: m.title, completed: m.completed } as ListType;
      });
      setData(json);
    }
    getData();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '50px',
      }}
    >
      <h2>ToDos</h2>
      <List parentData={data} />
    </div>
  );
};

export default Index;