import React from "react";

const Book = ({image, title, author}) =>
{
  const clickHandler = (e) => {
    alert('hello');
    console.log(e.target);
  }

  const complexExample = (author) => {
    alert(author);
  }

  return (
    <article className='book' onMouseOver = {() => {
      console.log(title);
    }}>

      <img src={image} alt=""/>
      <h2 onClick={() => alert('world')}>{title}</h2>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Button</button>
      <button type='button' onClick={() => complexExample(author)}>complexExample</button>
    </article>
  );
}

export default Book