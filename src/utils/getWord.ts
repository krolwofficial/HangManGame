import fetchData from './fetchData';

const getWord = async (dispatch: any) => {
  const word: any = await fetchData(dispatch);

  const user = word
    .toUpperCase()
    .split('')
    .map((letter: string) => {
      return {
        letter,
        show: !(letter !== ' ' && letter !== '-'),
      };
    });

  dispatch({
    type: 'SET_USER',
    payload: user,
  });
};

export default getWord;
