import { checkIfWin, checkIfLoose } from './checkIfEnd';
import findIndexOfCharacter from './findIndexOfCharacter';

const showLetter = (
  letter: string,
  word: string,
  dispatch: any,
  user: any,
  mistakes: any,
  checkedLetters: any
) => {
  const indices = findIndexOfCharacter(letter, word);

  if (indices.length) {
    const newUser = user.map((char: any) => {
      if (char.letter === letter) {
        return {
          letter: char.letter,
          show: true,
        };
      }
      return char;
    });

    dispatch({
      type: 'SET_USER',
      payload: newUser,
    });

    indices.forEach((indicator) => {
      dispatch({
        type: 'SHOW_LETTER',
        payload: indicator,
      });
    });

    checkIfWin(newUser, dispatch);
  } else if (!checkedLetters.includes(letter)) {
    dispatch({
      type: 'CHECK_LETTER',
      payload: letter,
    });

    const newMistakes = mistakes;
    newMistakes.push(true);

    dispatch({
      type: 'ADD_MISTAKE',
      payload: newMistakes,
    });

    checkIfLoose(newMistakes, dispatch);
  }
};

export default showLetter;
