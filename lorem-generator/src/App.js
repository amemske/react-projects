import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [count, setCount] = useState(0); // how many paragraphs to generate
  const [text, setText] = useState([]); // data of the paraphaphs

  const handleSubmit = (e) => {
    e.preventDefault();
    //count refers to the input value
    //the value comes in as a string so we change it to an Int
    //and assing it to a variable amount
    console.log(typeof count); // string
    let amount = parseInt(count); //convert to number
    console.log(`amount is ${amount}`);
    console.log('size of data = ' + data.length);
    //negative number
    if (count <= 0) {
      // check the state value of count
      amount = 1; //based on it, return the amount
    }
    //For numbers larger than the array
    if (count > data.length - 1) {
      // check the state value of count compare with array length
      //8
      amount = data.length - 1; // return all the paragraphs
    }
    //pass the data into set Text
    // display only what the the user is requesting
    setText(data.slice(0, amount)); // slice returns a new copy of the array - (start to end)

    console.log('size of text = ' + text.length);

    //console.log('Hello world');
  };
  //Add onsubmit to the form
  // setup a controlled input that references count, also setup onChange with the inline
  // function whcih controls the value once it is changed
  //text.map = text is the name of the array inside data
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
