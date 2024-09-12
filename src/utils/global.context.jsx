import React, { createContext, useReducer, useMemo, useEffect } from 'react';


export const initialState = {
  theme: 'light',
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};


export const ContextGlobal = createContext();


export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch({ type: 'TOGGLE_THEME' });
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('theme', state.theme);
   
    document.body.className = state.theme;
  }, [state.theme]);

 
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
