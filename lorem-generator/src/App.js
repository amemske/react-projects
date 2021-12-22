import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof count);
    let amount = parseInt(count);
    console.log(`amount is ${amount}`);
    console.log('size of data = ' + data.length);
    // display only what the the user is requesting
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length - 1) {
      //8
      amount = data.length - 1;
    }
    setText(data.slice(0, amount));
    //text.length depends on the value inside setText
    console.log('size of text = ' + text.length);

    //console.log('Hello world');
  };

  return (
    <section className='section-center'>
      <h3>tired of the boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraph:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
