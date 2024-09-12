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
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
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

  // aqui cargo el tema desde localStorage al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch({ type: 'SET_THEME', payload: savedTheme });
    }
  }, []);

  // aqui guardo el  tema en localStorage y actualizo clase del body
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
