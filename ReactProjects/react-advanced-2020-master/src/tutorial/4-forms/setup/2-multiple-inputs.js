import React, { useState } from 'react';

const ControlledInputs = () => {
  const [person, setPerson] = useState({firstName:'', email:'', age:''});
  const [people, setPeople] = useState([]);

  const hangleChange = (e) =>
  {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age)
    {
      const newPerson = {...person, id: new Date().getTime().toString()};
      setPeople([...people, newPerson]);
      setPerson({firstName: '', email: '', age: ''});
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={(e) => hangleChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={(e) => hangleChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={(e) => hangleChange(e)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
