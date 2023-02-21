import { ChangeEvent, FormEvent, useState } from 'react';

enum EFields {
  name = 'name',
  lastName = 'lastName',
  age = 'age',
}

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [lastName, setLastName] = useState('');
  const [valid, setValid] = useState(false);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = target;
    switch (id) {
      case EFields.name:
        setName(value);
        break;
      case EFields.age:
        setAge(value);
        break;
      case EFields.lastName:
        setLastName(value);
        break;
      default:
        console.log('Not in my enum');
        break;
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && age && lastName) {
      console.log('name', name, 'age', age, 'lastName', lastName);
      setValid((val) => {
        console.log('anterior', val);
        return true;
      });
      console.log('isValid:', valid);
    }
  };
  return (
    <>
      <div>Form</div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div style={{ display: 'flex', flexFlow: 'column wrap' }}>
          <div style={{ alignSelf: 'center', padding: '10px' }}>
            <label htmlFor='name'>Name:</label>
            <br />
            <input
              type='text'
              value={name}
              required
              onChange={(e) => {
                handleChange(e);
              }}
              id='name'
            />
            <br />
          </div>
          <div style={{ alignSelf: 'center', padding: '10px' }}>
            <label htmlFor='lastName'>Last Name:</label>
            <br />
            <input
              type='text'
              value={lastName}
              required
              onChange={(e) => {
                handleChange(e);
              }}
              id='lastName'
            />
            <br />
          </div>
          <div style={{ alignSelf: 'center', padding: '10px' }}>
            <label htmlFor='age'>Age:</label>
            <br />
            <input
              type='text'
              value={age}
              required
              onChange={(e) => {
                handleChange(e);
              }}
              id='age'
            />
            <br />
          </div>
          <div style={{ alignSelf: 'center', padding: '10px' }}>
            <button type='submit' value='Submit'>
              Submit
            </button>
          </div>
          <div></div>
        </div>
      </form>
    </>
  );
};

export default Form;
