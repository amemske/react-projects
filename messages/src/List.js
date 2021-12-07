import React, { Fragment } from 'react';

const List = ({ people }) => {
  return (
    <Fragment>
      {people.map((person) => {
        //desructure the items you need
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};

export default List;
