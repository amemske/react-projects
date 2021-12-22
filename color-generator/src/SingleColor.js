import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  //convert rgb array to string
  const rgbColors = rgb.join(',');
  //convert rgbtohex using external lib
  const hex = rgbToHex(...rgb);
  //add # to hexcolor
  const hexValue = `#${hexColor}`;

  //when
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgbColors})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight} %</p>
      <p className='color-value'>{hexValue} </p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
