import { FormEvent, useState } from 'react';
import FormInput, { FormInputHandler } from '~/shared/components/FormInput';
import FormButton from '~/shared/components/FormButton';

export enum EFields {
  name = 'name',
  lastName = 'lastName',
  age = 'age',
}

type FormFields = keyof typeof EFields;
interface FormField {
  title: FormFields;
  value: string;
  valid: boolean;
  required: boolean;
}
interface DummyField {
  form: {
    name: FormField;
    lastName: FormField;
    age: FormField;
  };
  valid: boolean;
}

const dummy: () => DummyField = () => {
  return {
    form: {
      name: {
        title: 'name',
        value: '',
        valid: false,
        required: true,
      },
      lastName: {
        title: 'lastName',
        value: '',
        valid: false,
        required: true,
      },
      age: {
        title: 'age',
        value: '',
        valid: true,
        required: false,
      },
    },
    valid: false,
  };
};

const Form = () => {
  const [data, setData] = useState(dummy());
  const handleChange: FormInputHandler = ({ target }) => {
    const { id, value } = target;
    const key = id as keyof typeof EFields;
    const { form } = { ...data };
    const validField = form[key].required ? value.length > 0 : true;
    form[key] = { ...form[key], value: value, valid: validField };
    const validFields = Object.keys(form).filter((f) => form[f as keyof typeof EFields]?.valid);
    const valid = validFields.length === Object.keys(data.form).length;
    setData({ form, valid });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('SUBMITTED', data.form);
  };
  const handleAbort = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('dummy', dummy());

    setData(dummy());
  };
  return (
    <>
      <div>Form</div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        onReset={(e) => {
          handleAbort(e);
        }}
      >
        <div className='flex flex-wrap flex-col'>
          <div className='self-center py-3 px-2 rounded-md border-2 border-fuchsia-50'>
            <h3>Form</h3>
            <FormInput
              name={EFields.name}
              value={data.form.name.value}
              handler={handleChange}
              required={data.form.name.required}
            />
            <FormInput
              name={EFields.lastName}
              value={data.form.lastName.value}
              handler={handleChange}
              required={data.form.lastName.required}
            />
            <FormInput
              name={EFields.age}
              value={data.form.age.value}
              handler={handleChange}
              required={data.form.age.required}
            />
            <div className='self-center p-3'>
              <FormButton type='submit' title='Submit' disabled={!data.valid} />
            </div>
            <div className='self-center p-3'>
              <FormButton type='reset' title='Reset' disabled={false} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
