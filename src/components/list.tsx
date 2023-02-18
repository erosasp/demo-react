import { Link } from '@tanstack/react-router';
import { FC } from 'react'
import { Props } from '~/shared/models';

export type ListType = { id: string, title: string, completed: boolean };
const List: FC<Props<ListType[]>> = ({ parentData }) => {
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
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {
            parentData.map((data) => (
              <tr key={data.id}>{
                Object.keys(data).map((key) => (
                  <td key={data.id + key}>{data[key as keyof ListType]}</td>
                ))
              }
                <td>
                  <Link to="/details/"
                    search={{
                      id: data.id
                    }}
                  >more details</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default List;
