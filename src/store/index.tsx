import React from 'react';
import { IState, TActions } from '../types/store';

const initialState: IState = {
  word: null,
  user: [],
  checkedLetters: [],
  end: false,
  mistakes: [],
  loading: true,
};

const reducer = (state: IState, { type, payload }: TActions): any => {
  switch (type) {
    case 'SET_WORD':
      return { ...state, word: payload };
    case 'SET_USER':
      return { ...state, user: payload };
    case 'CHECK_LETTER':
      return { ...state, checkedLetters: [...state.checkedLetters, payload] };
    case 'SET_END':
      return { ...state, end: payload, checkedLetters: [], mistakes: [] };
    case 'ADD_MISTAKE':
      return { ...state, mistakes: payload };
    case 'SET_LOADING':
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export const Store = React.createContext<IState | any>({});

const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(
    reducer,
    props.initialValue ? props.initialValue : initialState
  );
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};

export default StoreProvider;
