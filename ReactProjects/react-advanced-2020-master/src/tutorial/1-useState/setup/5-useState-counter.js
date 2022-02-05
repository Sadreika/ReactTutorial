import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () =>
  {
    setValue(0);
  }

  const increase = () => //async
  {
    setTimeout(() => {
      //setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  }
  return (
  <>
      <section style={{margin: '4rem 0'}}>
        <h2> Counter </h2>
        <h1> {value} </h1>
        <button className='btn' onClick={() => setValue (value - 1)}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={() => setValue (value + 1)}>Increase</button>
      </section>

      <section style={{margin: '4rem 0'}}>
        <h2> Counter v0.2 </h2>
        <h1> {value} </h1>
        <button className='btn' onClick={increase}>Increase</button>
      </section>
  </>
  );
};

// <> </> - fragment
export default UseStateCounter;
