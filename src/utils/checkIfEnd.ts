export const checkIfWin = (user: any, dispatch: any) => {
  !user.find((item: any) => item.show === false) &&
    dispatch({
      type: 'SET_END',
      payload: 'WON',
    });
};

export const checkIfLoose = (mistakes: any, dispatch: any) => {
  mistakes.length === 12 &&
    dispatch({
      type: 'SET_END',
      payload: 'LOST',
    });
};
