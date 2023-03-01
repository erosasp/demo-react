import { ChangeEvent, FC } from 'react';
import { EFields } from '~/components/Form';

export type FormInputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => void;
export type FormInputValue = string | number | readonly string[] | undefined;
type FormInputKeys = keyof typeof EFields;
export type FormInputOptions = {
  name: FormInputKeys;
  value: FormInputValue;
  required: boolean;
  handler: FormInputHandler;
};
const FormInput: FC<FormInputOptions> = ({ name, value, required, handler }) => {
  return (
    <>
      <div className='self-center p-3'>
        <label
          htmlFor={name}
          className={
            required && value!.toString().length === 0 ? 'text-orange-400' : 'text-gray-300'
          }
        >
          {name + (required ? '*' : '')}
        </label>
        <br />
        <input
          type='text'
          className='border-solid border-2 text-black border-gray-400 enabled:hover:border-blue-300 disabled:opacity-75'
          value={value}
          required={required}
          onChange={(e) => {
            handler(e);
          }}
          id={name}
        />
        <div className={required && value!.toString().length === 0 ? 'visible' : 'invisible'}>
          <p className={'text-sm '}>{`${name.toLowerCase()} is required`}</p>
        </div>
        <br />
      </div>
    </>
  );
};

export default FormInput;
