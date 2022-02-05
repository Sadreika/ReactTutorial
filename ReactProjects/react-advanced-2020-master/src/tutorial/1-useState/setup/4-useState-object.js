import React, { useCallback, useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState(
  {
      name: 'peter', age:24, message: 'random  message'
  });

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    setMessage('Hello');
  }

 return (
  <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change message</button>
  </>
  );

//  const changeMessage = () => {
//    setPerson({...person, message: 'hello'}); 
//    // ... (spring operator) - nukopijuoja objekta, be jo dingtu visas objektas
//  }

//   return (
//   <>
//     <h3>{person.name}</h3>
//     <h3>{person.age}</h3>
//     <h3>{person.message}</h3>
//     <button className='btn' onClick={changeMessage}>Change message</button>
//   </>
//   );
};

export default UseStateObject;
