import React, { useState, useEffect } from 'react';
//destructure the values from acolor rgb, weight
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false); // displayed when copying an item to clipboard
  //convert rgb array to string
  const rgbColors = rgb.join(',');

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
