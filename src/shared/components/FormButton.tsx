import { FC } from 'react';

export type FormButtonType = {
  type: 'submit' | 'button' | 'reset';
  disabled: boolean;
  title: string;
};
const FormButton: FC<FormButtonType> = ({ type, title, disabled }) => {
  const color = () => {
    let val = 'bg-orange-400';
    switch (type) {
      case 'submit':
        val = 'bg-orange-400';
        break;
      case 'button':
        val = 'bg-skyblue-300';
        break;
      case 'reset':
        val = 'bg-gray-500';
        break;
      default:
        console.log('no color');
        break;
    }
    return val;
  };
  return (
    <button
      className={color() + ' px-2 py-1 w-full rounded-sm disabled:bg-gray-500/50'}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default FormButton;
