import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = '';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
