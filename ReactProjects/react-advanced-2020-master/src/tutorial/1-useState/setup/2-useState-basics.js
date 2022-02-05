import React, { useState } from 'react';
// useState - function

const UseStateBasics = () => {
  // console.log(usaState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

const [text, setText] = useState('randomTitle');

const handleClick = () =>
{
  if(text === 'randomTitle')
  {
    setText('hello'); 
  }
  else
  {
    setText('randomTitle'); 
  }
}
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
