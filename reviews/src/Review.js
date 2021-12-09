import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  //check index length is not more or less the entire length
  const checkNum = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    //setIndex to + 1
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  const prevPerson = () => {
    //setIndex to -1
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  const RandomPerson = () => {
    setIndex((index) => {
      let RandomIndex = Math.floor(Math.random() * people.length);
      // console.log(RandomIndex);
      if (RandomIndex === index) {
        RandomIndex = index + 1;
      }
      console.log(RandomIndex);
      return checkNum(RandomIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type='button' className='random-btn' onClick={RandomPerson}>
        Suprise me
      </button>
    </article>
  );
};

export default Reviews;
