import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  //initailise some default values
  const [list, setList] = useState(new Values('#4cc9f0').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      //console.log('handleSubmit function executed');
      //generate color using values library
      let colors = new Values(color).all(10);
      console.log(colors);
      //populate the setlist array with colors
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder='#f15099'
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn '>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((acolor, index) => {
          console.log('acolor.hex ' + acolor.hex);
          return (
            <SingleColor
              key={index}
              {...acolor}
              index={index}
              hexColor={acolor.hex}
            />
          );
        })}
      </section>
    </>
  );
}
export default App;
