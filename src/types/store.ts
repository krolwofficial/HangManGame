export const SET_WORD = 'SET_WORD';
export const SET_USER = 'SET_USER';
export const CHECK_LETTER = 'CHECK_LETTER';
export const SET_END = 'SET_END';
export const ADD_MISTAKE = 'ADD_MISTAKE';
export const SET_LOADING = 'SET_LOADING';

type TWord = null | string;
type TUser = string[];
type TCheckedLetters = string[];
type TEnd = boolean;
type TMistakes = string[];
type TLoading = boolean;

export interface IState {
  word: TWord;
  user: TUser;
  checkedLetters: TCheckedLetters;
  end: TEnd;
  mistakes: TMistakes;
  loading: TLoading;
}

export interface SetWordAction {
  type: typeof SET_WORD;
  payload: TWord;
}

export interface SetUserAction {
  type: typeof SET_USER;
  payload: TUser;
}

export interface CheckLetterAction {
  type: typeof CHECK_LETTER;
  payload: TCheckedLetters;
}

export interface SetEndAction {
  type: typeof SET_END;
  payload: TEnd;
}

export interface AddMistakeAction {
  type: typeof ADD_MISTAKE;
  payload: TMistakes;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: TLoading;
}

export type TActions =
  | SetWordAction
  | SetUserAction
  | CheckLetterAction
  | SetEndAction
  | AddMistakeAction
  | SetLoadingAction;
