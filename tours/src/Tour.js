import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTours }) => {
  const [readMore, setReadmore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)} ... `}
          <button onClick={() => setReadmore(!readMore)}>
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button
          type='button'
          className='delete-btn'
          onClick={() => {
            removeTours(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
