import React, { useEffect } from 'react';
//type prop - is used for css class danger and success
//msg - is the type of message,
//type and message props are derivied from alert state object
//removeAlert is a function that is triggered using useEffect after 3 seconds
// list is what is targeted by the use effect
// Finally we return the alert, alert-type and message

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
