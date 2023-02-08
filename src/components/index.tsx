import List, { listType } from "./list";
import dataList from '../data/dataList.json'
import { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState(dataList);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => data.slice(0, 20).map((m: listType) => {
        return { id: m.id, title: m.title, completed: m.completed } as listType;
      }))
      .then((data) => setData(data))
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

export default Home;
