import { FC } from 'react'
export type listType = { id: string, title: string, completed: boolean };
interface Props {
  parentData: { [key: string]: any }[]
}

const List: FC<Props> = (parentData) => {
  const listData = Object.values(parentData.parentData);
  const keys = Object.keys(parentData.parentData[0]);
  return (
    <div
      style={{
        position: 'relative',
        flexGrow: '1',
        maxHeight: '50vh',
        overflowY: 'auto'
      }}
    >
      <table
        style={{ width: '100%', borderSpacing: '0', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            listData.map((data) => (
              <tr key={(data.id).toString()}>{
                keys.map((key) => (
                  <td key={data.id + key.toString()}>{data[key].toString()}</td>
                ))
              }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default List;
