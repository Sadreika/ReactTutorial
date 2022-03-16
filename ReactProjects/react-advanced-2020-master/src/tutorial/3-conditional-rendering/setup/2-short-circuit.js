import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
  <>
    {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}
    <h1>returns null if text is empty: {text || "null"}</h1>
    <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
    {isError && <h1>Error...</h1>}
    {/* {text && <h1>hello world</h1>}
    {!text && <h1>hello world 2 </h1>} */}
    {isError ? <p>there is error</p> : <p>success</p>}
  </>);
};

export default ShortCircuit;
