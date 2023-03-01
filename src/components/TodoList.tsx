import { Link } from '@tanstack/react-router';
import { FC, useRef } from 'react';
import { Props } from '~/shared/models';

export type ListType = { id: string; title: string; completed: boolean };
const TodoList: FC<Props<ListType[]>> = ({ parentData }) => {
  const scrollDown = useRef<HTMLDivElement>(null);
  const handleClickScroll = () => {
    scrollDown.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='self-center p-3'>
        <button
          className={'bg-blue-200' + ' px-2 py-1 w-full rounded-sm disabled:bg-gray-500/50'}
          type='button'
          onClick={handleClickScroll}
        >
          Scroll Down
        </button>
      </div>
      <div className='flex flex-col grow-1 max-h-96 overflow-auto'>
        <table style={{ width: '100%', borderSpacing: '0', border: '1px solid black' }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {parentData.map((data) => (
              <tr key={data.id}>
                {Object.keys(data).map((key) => (
                  <td key={data.id + key} id={data.id}>
                    {data[key as keyof ListType]}
                  </td>
                ))}
                <td>
                  <Link
                    to='/details/$id'
                    params={{
                      id: data.id,
                    }}
                  >
                    more details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div ref={scrollDown}></div>
      </div>
    </>
  );
};

export default TodoList;
